import { useRouter } from "next/router";

import {
  useClientRouting,
  useRoutePropagation,
} from "@shopify/app-bridge-react";

export default function ClientRouter() {
  const router = useRouter();

  useClientRouting(router);
  useRoutePropagation(router.asPath);

  return null;
}
