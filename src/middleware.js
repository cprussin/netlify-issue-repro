import { MiddlewareRequest } from "@netlify/next";

export default async (request) => new MiddlewareRequest(request).rewrite('/foo');
