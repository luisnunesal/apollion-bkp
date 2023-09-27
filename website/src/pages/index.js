import React, { useState } from 'react';
import {
  Card,
  Flex,
  Link,
  Paper,
  Text,
  Headline,
  Form,
  Input,
  Image,
  Grid,
} from '@captalys-platform/core';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const features = [
  {
    imageUrl: 'img/apollion-easy-forms.gif',
    title: 'Formulários em segundos',
    link: 'docs/form-form#exemplo-de-configuração',
    description:
      'Usando o componente de formulário, você pode configurar somente um JSON e nós cuidamos do resto!',
  },
  {
    imageUrl: 'img/apollion-easy-layout.gif',
    title: 'Facilite sua vida',
    link: 'docs/containers-flex',
    description:
      'Crie seus layouts com facilidade. Disponível Flex e CSS Area (Grid)',
  },
];

function Feature({ imageUrl, title, description, link }) {
  return (
    <Card
      // width="clamp(300px, calc(100vw/3), 100%)"
      title={title}
      description={description}
      media={<Image cover src={useBaseUrl(imageUrl)} />}
      actionComponent={<Link to={link} text="ver mais" />}
    />
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [isSucceeded, setSuceeded] = useState(false);

  return (
    <Layout title="Home" description="Componentes padrões da Captalys">
      <Paper as="header" bgColor="main" deep={0} p="xl" borderRadius="straight">
        <Flex container alignItems="center" gap="large">
          <Headline variant="h1" text={siteConfig.title} color="deepLight" />
          <Text variant="p" text={siteConfig.tagline} color="deepLight" />
          <Link.Button
            variant="outlined"
            to="docs/getting-started-installation"
            text="Como adicionar ao meu projeto?"
            color="tertiary"
          />
        </Flex>
      </Paper>
      <Flex as="main" container>
        {features && features.length && (
          <Grid
            as="section"
            padding="clamp(.75rem, 1rem, 4.5rem)"
            style={{ justifyContent: 'space-around' }}
            medias={{
              gap: 'large',
              columns: 'repeat(auto-fit, minmax(280px, 320px))',
            }}
          >
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </Grid>
        )}
        <Paper
          as="section"
          p="xl"
          justifyContent="center"
          alignItems="center"
          bgColor="primary.light"
          deep={0}
          borderRadius="straight"
        >
          <Flex container>
            <Headline variant="h2">
              Inscreva-se na nossa&nbsp;
              <Text textDecoration="underline" color="primary">
                Newsletter
              </Text>
            </Headline>
            <Form
              handleSubmit={(values, helpers) => {
                if (!values.newsletter) {
                  helpers.setSubmitting(false);
                  return false;
                }

                console.log(values);
                setSuceeded(true);
                helpers.resetForm();
              }}
              fields={{
                newsletter: {
                  name: 'newsletter',
                  component: Input,
                  hintSuccessText: isSucceeded ? 'Obrigado!' : '',
                  success: isSucceeded,
                  inputProps: {
                    type: 'email',
                    placeholder: 'Digite seu email',
                  },
                },
              }}
            />
          </Flex>
        </Paper>

        <Flex p="xxl" justifyContent="center" alignItems="center">
          <Headline variant="h2">
            Acompanhe&nbsp;
            <Text textDecoration="underline" color="primary">
              nossos cursos!
            </Text>
          </Headline>
        </Flex>
      </Flex>
    </Layout>
  );
}
