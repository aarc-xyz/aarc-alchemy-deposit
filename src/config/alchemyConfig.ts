// @noErrors
import { createConfig, cookieStorage } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { alchemy, mainnet } from "@account-kit/infra";

export const alchemyConfig = createConfig(
  {
    // alchemy config
    transport: alchemy({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
    chain: mainnet,
    ssr: true,
    storage: cookieStorage,
    enablePopupOauth: true, 
    sessionConfig: {
      expirationTimeMs: 1000 * 60 * 60,
    },
  },
  {
    // authentication ui config - your customizations here
    auth: {
      sections: [
        [{ type: "email" }],
        [
          { type: "passkey" },
          { type: "social", authProviderId: "google", mode: "popup" },
        ],
      ],
      addPasskeyOnSignup: true,
      hideSignInText: false,
    },
  }
);

export const queryClient = new QueryClient();
