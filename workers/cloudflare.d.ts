/** Minimal stubs so workers/app.ts typechecks without @cloudflare/workers-types. */
interface Env {}

interface ExecutionContext {
  waitUntil(p: Promise<unknown>): void;
  passThroughOnException(): void;
}

type ExportedHandler<E> = {
  fetch(
    request: Request,
    env: E,
    ctx: ExecutionContext,
  ): Response | Promise<Response>;
};
