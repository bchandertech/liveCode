import { TextDecoder, TextEncoder } from "node:util";
import { runInThisContext } from "node:vm";
import "@testing-library/jest-dom";

globalThis.TextEncoder ??= TextEncoder;
globalThis.TextDecoder ??= TextDecoder;
globalThis.Request ??= runInThisContext("Request");
