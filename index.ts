import { defineClientConfig } from "@vuepress/client";

import { fileA } from "~/src";

import { fileB } from "./src/file-b";

fileA();

fileB();

defineClientConfig({});
