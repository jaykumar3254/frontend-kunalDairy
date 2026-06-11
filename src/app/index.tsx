import { Redirect } from "expo-router";

export default function CommonIndex() {
  return <Redirect href="/(admin)/dashboard" />;
}
