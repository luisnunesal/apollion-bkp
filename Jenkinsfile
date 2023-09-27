#!/usr/bin/groovy
//Jenkinsfile v7 2020-01-03
//Maintainer - infrastructure@captalys.com.br

env.APP = "apollion"
env.APP_SANDBOX = "apollion-sandbox"
env.APP_STAGING = "apollion-staging"

env.HELM_REPO = "platform-v2"

env.NOTIFY = 0

def random_number() {
  Random rnd = new Random()
  def number = rnd.nextInt(40000)

  while(number < 30000) {
      number = rnd.nextInt(40000)
  }
  return number
}

def captalys_deploy() {

  sh "helm repo update"

  if (env.ENV == "production") {
    realmList = sh(returnStdout: true, script: "gauntlet get-realm --app ${env.APP}")
    list = realmList.split(",")
    list.each { realm ->

        context = sh(returnStdout: true, script: "gauntlet get-context --app ${env.TARGET_APP} --realm ${realm}").trim()

        hostname_params = sh(returnStdout: true, script: "gauntlet get-hostname-params --app ${env.APP} --realm ${realm}").trim()

        sh "helm upgrade ${env.TARGET_APP} ${env.HELM_REPO}/${env.TARGET_APP} --kube-context ${context} --install --namespace ${env.ENV} --version ${env.CHART_VERSION} --set image.tag=${env.TAG}${git_tag} --set realm.name=${realm} ${hostname_params}"
    }
  } else if (env.ENV == "staging") {
    realm = "asgard"
    sh "helm upgrade ${env.TARGET_APP} ${env.HELM_REPO}/${env.TARGET_APP} --kube-context ${env.CLUSTER_CONTEXT} --install --namespace ${env.ENV} --version ${env.CHART_VERSION} --set image.tag=${env.TAG}${git_tag} --set realm.name=${realm}"

  } else if (env.ENV == "sandbox") {
    realm = "asgard"
    sh "helm upgrade ${env.TARGET_APP} ${env.HELM_REPO}/${env.TARGET_APP} --kube-context ${env.CLUSTER_CONTEXT} --install --namespace ${env.ENV} --version ${env.CHART_VERSION} --set image.tag=${env.TAG}${git_tag} --set realm.name=${realm}"

  } else {
    println "environment not defined"
    sh "exit 1"
  }

}


def getBuildStages(enabled) {
  def stages = []
  if (enabled == 'false') {
    return stages
  }
  if (env.BRANCH_NAME == 'master') {
    env.TAG = 'prod-'
    env.ENV = 'production'
    env.FULL = '0'
    env.BUILD = '1'
    env.TARGET_APP = env.APP
    stages = ["tests", "build", "push artifact", "deploy"]
  }
  else if ( env.BRANCH_NAME == 'sandbox') {
    env.TAG = "sbox-"
    env.ENV = "sandbox"
    env.FULL = '1'
    env.BUILD = '1'
    env.NOTIFY = '1'
    env.TARGET_APP = env.APP_SANDBOX
    stages = ["tests", "code analysis", "build", "push artifact", "deploy"]
  }
  else if ( env.BRANCH_NAME == 'staging') {
    env.TAG = "stag-"
    env.ENV = "staging"
    env.FULL = '1'
    env.BUILD = '1'
    env.TARGET_APP = env.APP_STAGING
    stages = ["tests", "code analysis", "build", "push artifact", "deploy"]
  }
  else if ( env.BRANCH_NAME =~ '.hotfix.') {
    env.TAG = "hotfix-"
    env.ENV = "sandbox"
    env.FULL = '1'
    env.BUILD = '0'
    stages = ["tests", "code analysis"]
  }
  else if ((env.BRANCH_NAME =~ '.*feature.*').matches()) {
    env.TAG = "feature-"
    env.ENV = "development"
    env.FULL = '0'
    env.BUILD = '1'
    stages = ["tests"]
  }
  else {
    env.BUILD = '0'
    env.FULL = '0'
    env.TAG = "other-"
    env.ENV = "development"
    stages = ["tests"]
  }
  return stages
}

properties([[$class: 'GitLabConnectionProperty', gitLabConnection: 'GitLabCaptalys']])
node('master') {
  stage("Checkout") {
    sh "rm -fr *"
    checkout([
      $class: 'GitSCM',
      branches: scm.branches,
      doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
      extensions: scm.extensions + [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]],
      submoduleCfg: [],
      userRemoteConfigs: scm.userRemoteConfigs
    ])
    git_tag = sh(returnStdout: true, script: "git log | head -n 1 | cut -c8-15 ").trim()
  }

  env.STATUS = sh(returnStdout: true, script: "gauntlet get-status -s ${env.APP}")
  gitlabBuilds(builds: getBuildStages(env.STATUS)) {

    env.IMAGE_REPOSITORY = sh(returnStdout: true, script: "gauntlet get-docker-repo -a ${env.APP}").trim()
    env.TESTS = sh(returnStdout: true, script: "gauntlet get-tests -s ${env.APP}").trim()
    env.CHART_VERSION = sh(returnStdout: true, script: "gauntlet get-chart-version -c ${env.TARGET_APP}").trim() as Integer
    env.CLUSTER_CONTEXT = sh(returnStdout: true, script: "gauntlet get-context -s ${env.TARGET_APP}").trim()

    if (env.TESTS == 'true'){
      stage("Tests") {
        gitlabCommitStatus(name: 'tests') {
          updateGitlabCommitStatus name: 'tests', state: 'running'
          try {
            print "tests"
            updateGitlabCommitStatus name: 'tests', state: 'success'
          }
          catch (exc) {
            updateGitlabCommitStatus name: 'tests', state: 'failed'
            sh "exit 1"
          }
        }
      }
    }
    else {
      updateGitlabCommitStatus name: 'tests', state: 'success'
    }
    if (env.FULL == "1"){
      stage("Code Analysis") {
        gitlabCommitStatus(name: 'code analysis') {
          updateGitlabCommitStatus name: 'code analysis', state: 'running'
          try {
            print "Code Analsys"
            updateGitlabCommitStatus name: 'code analysis', state: 'success'
          }
          catch (exc) {
            updateGitlabCommitStatus name: 'code analysis', state: 'failed'
            sh "exit 1"
          }
        }
      }
    }
    if (env.BUILD == "1") {
      timeout(activity: true, time: 30) {
        stage("Build Artifact") {
          gitlabCommitStatus(name: 'build') {
            updateGitlabCommitStatus name: 'build', state: 'running'
            try {
              sh "docker build --pull -t ${env.IMAGE_REPOSITORY}:${env.TAG}latest -t ${env.IMAGE_REPOSITORY}:${env.TAG}${git_tag} --build-arg=RUN_ENVIRONMENT=${env.ENV} ."
              updateGitlabCommitStatus name: 'build', state: 'success'
            }
            catch (exc) {
              updateGitlabCommitStatus name: 'build', state: 'failed'
              sh "exit 1"
            }
          }
        }
      }
      stage("Push Artifact") {
        gitlabCommitStatus(name: 'push artifact') {
          updateGitlabCommitStatus name: 'push artifact', state: 'running'
          try {
            sh "docker push ${env.IMAGE_REPOSITORY}:${env.TAG}${git_tag}"
            sh "docker push ${env.IMAGE_REPOSITORY}:${env.TAG}latest"
            updateGitlabCommitStatus name: 'push artifact', state: 'success'
          }
          catch (exc) {
            updateGitlabCommitStatus name: 'push artifact', state: 'failed'
            sh "exit 1"
          }
        }
      }
    }
    // timeout(activity: true, time: 10) {
    //   stage("Functional Test") {
    //     port = random_number()
    //     workspace = pwd()
    //     docker.image("${env.IMAGE_REPOSITORY}:${env.TAG}${git_tag}").inside("-u root -p ${port}:80") {
    //       sh "httpd"
    //       input "http://devops.captalys.io:${port}"
    //     }
    //   }
    // }
    stage('Deploy') {
      gitlabCommitStatus(name: 'deploy') {
        updateGitlabCommitStatus name: 'deploy', state: 'running'
        try {
          stage("Deploy to ${env.ENV}") {

            captalys_deploy()

            updateGitlabCommitStatus name: 'deploy', state: 'success'
          }
        }
        catch (exc) {
          updateGitlabCommitStatus name: 'deploy', state: 'failed'
          sh "exit 1"
        }
      }
    }
  }
}
