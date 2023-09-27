import React from 'react';

export const userIcons = {
  user: (
    <svg viewBox="0 0 448 512">
      <path d="M224 256a128 128 0 100-256 128 128 0 000 256zm89.6 32h-16.7a174.3 174.3 0 01-145.8 0h-16.7A134.4 134.4 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 640 512">
      <path d="M96 224a64 64 0 10-.1-128.1A64 64 0 0096 224zm448 0a64 64 0 10-.1-128.1A64 64 0 00544 224zm32 32h-64a63.8 63.8 0 00-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66a32 32 0 0032-32v-32a64 64 0 00-64-64zm-256 0a112 112 0 10.1-223.9A112 112 0 00320 256zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3A115.2 115.2 0 00128 403.2V432a48 48 0 0048 48h288a48 48 0 0048-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4A63.8 63.8 0 00128 256H64a64 64 0 00-64 64v32a32 32 0 0032 32h65.9a146.6 146.6 0 0175.2-109.4z" />
    </svg>
  ),
  userConfig: (
    <svg viewBox="0 0 16 16">
      <path d="M15.3 11.5v-1.1l.6-.4s.1-.1 0-.2c0-.5-.4-1-.7-1.5h-.3l-.6.4a3 3 0 00-1-.6v-.7-.2h-1.7l-.2.2V8a3 3 0 00-.9.6l-.6-.4h-.3l-.8 1.5v.2l.7.4v1L9 12s-.1 0 0 .2c0 .5.4 1 .7 1.4h.3l.6-.3 1 .5v1h1.7l.2-.2v-.8a3 3 0 00.9-.5l.6.4h.3L16 12v-.2l-.7-.4zm-2.9.7c-.7 0-1.2-.6-1.2-1.3 0-.6.5-1.2 1.2-1.2s1.2.6 1.2 1.2c0 .7-.5 1.3-1.2 1.3zM5.6 8.5c1.8 0 3.2-1.5 3.2-3.3C8.8 3.5 7.4 2 5.6 2a3.2 3.2 0 00-3.2 3.3c0 1.7 1.4 3.2 3.2 3.2zm5 5.8l-.1-.1h-.2a1 1 0 01-.5.2 1 1 0 01-.7-.3c-.5-.5-.9-1.1-1-1.8a1 1 0 01.4-1.1l.2-.2v-.2h-.2A1 1 0 018 9.5l.1-.3h-.7a4.3 4.3 0 01-3.6 0h-.4A3.4 3.4 0 000 12.7v1c0 .8.5 1.3 1.2 1.3H10c.3 0 .5 0 .7-.2v-.5z" />
    </svg>
  ),
  userAdd: (
    <svg viewBox="0 0 16 16">
      <path d="M15.6 7.3H14V5.7c0-.3-.2-.5-.4-.5h-.8c-.2 0-.4.2-.4.5v1.6h-1.6c-.2 0-.4.2-.4.4v.8c0 .2.2.4.4.4h1.6v1.6c0 .3.2.4.4.4h.8c.2 0 .4-.1.4-.4V9h1.6c.2 0 .4-.2.4-.4v-.8c0-.2-.2-.4-.4-.4zm-10 1.2c1.8 0 3.2-1.5 3.2-3.3C8.8 3.5 7.4 2 5.6 2a3.2 3.2 0 00-3.2 3.3c0 1.7 1.4 3.2 3.2 3.2zm2.2.8h-.4a4.3 4.3 0 01-3.6 0h-.4A3.4 3.4 0 000 12.7v1c0 .8.5 1.3 1.2 1.3H10c.7 0 1.2-.5 1.2-1.2v-1c0-2-1.5-3.5-3.4-3.5z" />
    </svg>
  ),
  userDelete: (
    <svg viewBox="0 0 16 16">
      <path d="M15.6 7.3h-4.8c-.2 0-.4.2-.4.4v.8c0 .2.2.4.4.4h4.8c.2 0 .4-.2.4-.4v-.8c0-.2-.2-.4-.4-.4zm-10 1.2c1.8 0 3.2-1.5 3.2-3.3C8.8 3.5 7.4 2 5.6 2a3.2 3.2 0 00-3.2 3.3c0 1.7 1.4 3.2 3.2 3.2zm2.2.8h-.4a4.3 4.3 0 01-3.6 0h-.4A3.4 3.4 0 000 12.7v1c0 .8.5 1.3 1.2 1.3H10c.7 0 1.2-.5 1.2-1.2v-1c0-2-1.5-3.5-3.4-3.5z" />
    </svg>
  ),
  userLocked: (
    <svg viewBox="0 0 16 16">
      <path d="M5.6 8.5a3.2 3.2 0 003-2A3.3 3.3 0 007.9 3a3.2 3.2 0 00-5.5 2.3c0 .8.3 1.6 1 2.2.5.7 1.4 1 2.2 1zM8 10.1c0-.2 0-.5.2-.7h-.8a4.3 4.3 0 01-3.6 0h-.4c-1 0-1.8.3-2.4 1-.6.6-1 1.4-1 2.3v1c0 .4.1.7.4 1 .2.2.5.3.8.3h7l-.2-.8v-4zm7.2-.8h-.8v-2c0-.6-.2-1-.6-1.5a2 2 0 00-2.8 0 2 2 0 00-.6 1.5v2h-.8l-.6.3-.2.5v4c0 .3 0 .5.2.7l.6.2h5.6c.2 0 .4 0 .6-.2l.2-.6v-4c0-.3 0-.5-.2-.6a.8.8 0 00-.6-.3zM12.4 13a.8.8 0 01-.7-.5.8.8 0 01.1-1 .8.8 0 011.4.7c0 .2 0 .4-.2.5l-.6.3zm.8-3.7h-1.6v-2c0-.2 0-.4.2-.6a.8.8 0 011.2 0l.2.6v2z" />
    </svg>
  ),
  userEdit: (
    <svg viewBox="0 0 16 16">
      <path d="M5.6 8.5c1.8 0 3.2-1.5 3.2-3.3C8.8 3.5 7.4 2 5.6 2a3.2 3.2 0 00-3.2 3.2c0 1.8 1.4 3.3 3.2 3.3zm2.2.8h-.4a4.3 4.3 0 01-3.6 0h-.4A3.4 3.4 0 000 12.7v1c0 .8.5 1.3 1.2 1.3h6.9v-2.1l.1-.3.2-.2 2-2a3.3 3.3 0 00-2.6-1zM9 13l-.2 1.6c0 .2.2.4.4.4l1.6-.2 3.4-3.5-1.8-1.8L9 13zm6.8-4.2l-1-1a.6.6 0 00-.8 0l-1 1V9l1.8 1.8 1-1c.3-.3.3-.6 0-.9z" />
    </svg>
  ),
  userCheck: (
    <svg viewBox="0 0 16 16">
      <path d="M5.6 8.5c1.8 0 3.2-1.5 3.2-3.3C8.8 3.5 7.4 2 5.6 2a3.2 3.2 0 00-3.2 3.3c0 1.7 1.4 3.2 3.2 3.2zm2.2.8h-.4a4.3 4.3 0 01-3.6 0h-.4A3.4 3.4 0 000 12.7v1c0 .8.5 1.3 1.2 1.3H10c.7 0 1.2-.5 1.2-1.2v-1c0-2-1.5-3.5-3.4-3.5zM16 6.1l-.7-.8a.3.3 0 00-.4 0L12.2 8 11 6.8a.3.3 0 00-.4 0l-.7.7c-.1.1-.1.3 0 .4l2 2.1c.2.2.4.2.5 0l3.5-3.5c.1-.1.1-.3 0-.4z" />
    </svg>
  ),
  userBlock: (
    <svg viewBox="0 0 16 16">
      <path d="M15.8 13.6l-6-4.8a3.6 3.6 0 001.8-3.1C11.6 3.7 10 2 8 2 6.3 2 5 3.2 4.5 4.7L1.1 2.1a.4.4 0 00-.5 0l-.5.7c-.2.2-.1.4 0 .6L15 14.9h.5l.5-.7c.2-.2.1-.4 0-.6zM5 10.1a3.4 3.4 0 00-3.4 3.4v.3c0 .7.5 1.2 1.2 1.2h9.6L6 10.1H5z" />
    </svg>
  ),
  userInvalid: (
    <svg viewBox="0 0 16 16">
      <path d="M14.7 8L16 7v-.6l-.6-.6a.4.4 0 00-.6 0l-1.1 1.1-1.1-1.1a.4.4 0 00-.6 0l-.6.6v.5l1.2 1.2-1.2 1.2v.5l.6.6c.1.2.4.2.6 0l1.1-1.1 1.1 1.1c.2.2.5.2.6 0l.6-.6v-.5L14.7 8zm-9.1.5c1.8 0 3.2-1.5 3.2-3.3C8.8 3.5 7.4 2 5.6 2a3.2 3.2 0 00-3.2 3.3c0 1.7 1.4 3.2 3.2 3.2zm2.2.8h-.4a4.3 4.3 0 01-3.6 0h-.4A3.4 3.4 0 000 12.7v1c0 .8.5 1.3 1.2 1.3H10c.7 0 1.2-.5 1.2-1.2v-1c0-2-1.5-3.5-3.4-3.5z" />
    </svg>
  ),
};
