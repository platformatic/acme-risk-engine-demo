import { type FastifyReply, type FastifyPluginAsync } from 'fastify'

declare namespace nakamoto {
  export interface Nakamoto {
    getExample(req?: GetExampleRequest): Promise<GetExampleResponseOK>;
  }
  export interface NakamotoOptions {
    url: string
  }
  export const nakamoto: NakamotoPlugin;
  export { nakamoto as default };
  export interface FullResponse<T> {
    'statusCode': number;
    'headers': object;
    'body': T;
  }

  export interface GetExampleRequest {
  }

  export interface GetExampleResponseOK {
    'hello': string;
  }

}

type NakamotoPlugin = FastifyPluginAsync<NonNullable<nakamoto.NakamotoOptions>>

declare module 'fastify' {
  interface ConfigureNakamoto {
    getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    'nakamoto': nakamoto.Nakamoto;
    configureNakamoto(opts: ConfigureNakamoto): unknown
  }

  interface FastifyRequest {
    'nakamoto': nakamoto.Nakamoto;
  }
}

declare function nakamoto(...params: Parameters<NakamotoPlugin>): ReturnType<NakamotoPlugin>;
export = nakamoto;
