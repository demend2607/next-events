
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NextEvents
 * 
 */
export type NextEvents = $Result.DefaultSelection<Prisma.$NextEventsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NextEvents
 * const nextEvents = await prisma.nextEvents.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more NextEvents
   * const nextEvents = await prisma.nextEvents.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nextEvents`: Exposes CRUD operations for the **NextEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NextEvents
    * const nextEvents = await prisma.nextEvents.findMany()
    * ```
    */
  get nextEvents(): Prisma.NextEventsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NextEvents: 'NextEvents'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nextEvents"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NextEvents: {
        payload: Prisma.$NextEventsPayload<ExtArgs>
        fields: Prisma.NextEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NextEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NextEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>
          }
          findFirst: {
            args: Prisma.NextEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NextEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>
          }
          findMany: {
            args: Prisma.NextEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>[]
          }
          create: {
            args: Prisma.NextEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>
          }
          createMany: {
            args: Prisma.NextEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NextEventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>[]
          }
          delete: {
            args: Prisma.NextEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>
          }
          update: {
            args: Prisma.NextEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>
          }
          deleteMany: {
            args: Prisma.NextEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NextEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NextEventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>[]
          }
          upsert: {
            args: Prisma.NextEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextEventsPayload>
          }
          aggregate: {
            args: Prisma.NextEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNextEvents>
          }
          groupBy: {
            args: Prisma.NextEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NextEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NextEventsCountArgs<ExtArgs>
            result: $Utils.Optional<NextEventsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    nextEvents?: NextEventsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model NextEvents
   */

  export type AggregateNextEvents = {
    _count: NextEventsCountAggregateOutputType | null
    _avg: NextEventsAvgAggregateOutputType | null
    _sum: NextEventsSumAggregateOutputType | null
    _min: NextEventsMinAggregateOutputType | null
    _max: NextEventsMaxAggregateOutputType | null
  }

  export type NextEventsAvgAggregateOutputType = {
    id: number | null
  }

  export type NextEventsSumAggregateOutputType = {
    id: number | null
  }

  export type NextEventsMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    city: string | null
    location: string | null
    date: Date | null
    organizerName: string | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NextEventsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    city: string | null
    location: string | null
    date: Date | null
    organizerName: string | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NextEventsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    city: number
    location: number
    date: number
    organizerName: number
    imageUrl: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NextEventsAvgAggregateInputType = {
    id?: true
  }

  export type NextEventsSumAggregateInputType = {
    id?: true
  }

  export type NextEventsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    city?: true
    location?: true
    date?: true
    organizerName?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NextEventsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    city?: true
    location?: true
    date?: true
    organizerName?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NextEventsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    city?: true
    location?: true
    date?: true
    organizerName?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NextEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextEvents to aggregate.
     */
    where?: NextEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextEvents to fetch.
     */
    orderBy?: NextEventsOrderByWithRelationInput | NextEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NextEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NextEvents
    **/
    _count?: true | NextEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NextEventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NextEventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NextEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NextEventsMaxAggregateInputType
  }

  export type GetNextEventsAggregateType<T extends NextEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateNextEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNextEvents[P]>
      : GetScalarType<T[P], AggregateNextEvents[P]>
  }




  export type NextEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextEventsWhereInput
    orderBy?: NextEventsOrderByWithAggregationInput | NextEventsOrderByWithAggregationInput[]
    by: NextEventsScalarFieldEnum[] | NextEventsScalarFieldEnum
    having?: NextEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NextEventsCountAggregateInputType | true
    _avg?: NextEventsAvgAggregateInputType
    _sum?: NextEventsSumAggregateInputType
    _min?: NextEventsMinAggregateInputType
    _max?: NextEventsMaxAggregateInputType
  }

  export type NextEventsGroupByOutputType = {
    id: number
    name: string
    slug: string
    city: string
    location: string
    date: Date
    organizerName: string
    imageUrl: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: NextEventsCountAggregateOutputType | null
    _avg: NextEventsAvgAggregateOutputType | null
    _sum: NextEventsSumAggregateOutputType | null
    _min: NextEventsMinAggregateOutputType | null
    _max: NextEventsMaxAggregateOutputType | null
  }

  type GetNextEventsGroupByPayload<T extends NextEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NextEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NextEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NextEventsGroupByOutputType[P]>
            : GetScalarType<T[P], NextEventsGroupByOutputType[P]>
        }
      >
    >


  export type NextEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nextEvents"]>

  export type NextEventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nextEvents"]>

  export type NextEventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nextEvents"]>

  export type NextEventsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NextEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "city" | "location" | "date" | "organizerName" | "imageUrl" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["nextEvents"]>

  export type $NextEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NextEvents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      city: string
      location: string
      date: Date
      organizerName: string
      imageUrl: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nextEvents"]>
    composites: {}
  }

  type NextEventsGetPayload<S extends boolean | null | undefined | NextEventsDefaultArgs> = $Result.GetResult<Prisma.$NextEventsPayload, S>

  type NextEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NextEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NextEventsCountAggregateInputType | true
    }

  export interface NextEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NextEvents'], meta: { name: 'NextEvents' } }
    /**
     * Find zero or one NextEvents that matches the filter.
     * @param {NextEventsFindUniqueArgs} args - Arguments to find a NextEvents
     * @example
     * // Get one NextEvents
     * const nextEvents = await prisma.nextEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NextEventsFindUniqueArgs>(args: SelectSubset<T, NextEventsFindUniqueArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NextEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NextEventsFindUniqueOrThrowArgs} args - Arguments to find a NextEvents
     * @example
     * // Get one NextEvents
     * const nextEvents = await prisma.nextEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NextEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, NextEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NextEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsFindFirstArgs} args - Arguments to find a NextEvents
     * @example
     * // Get one NextEvents
     * const nextEvents = await prisma.nextEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NextEventsFindFirstArgs>(args?: SelectSubset<T, NextEventsFindFirstArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NextEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsFindFirstOrThrowArgs} args - Arguments to find a NextEvents
     * @example
     * // Get one NextEvents
     * const nextEvents = await prisma.nextEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NextEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, NextEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NextEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NextEvents
     * const nextEvents = await prisma.nextEvents.findMany()
     * 
     * // Get first 10 NextEvents
     * const nextEvents = await prisma.nextEvents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nextEventsWithIdOnly = await prisma.nextEvents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NextEventsFindManyArgs>(args?: SelectSubset<T, NextEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NextEvents.
     * @param {NextEventsCreateArgs} args - Arguments to create a NextEvents.
     * @example
     * // Create one NextEvents
     * const NextEvents = await prisma.nextEvents.create({
     *   data: {
     *     // ... data to create a NextEvents
     *   }
     * })
     * 
     */
    create<T extends NextEventsCreateArgs>(args: SelectSubset<T, NextEventsCreateArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NextEvents.
     * @param {NextEventsCreateManyArgs} args - Arguments to create many NextEvents.
     * @example
     * // Create many NextEvents
     * const nextEvents = await prisma.nextEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NextEventsCreateManyArgs>(args?: SelectSubset<T, NextEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NextEvents and returns the data saved in the database.
     * @param {NextEventsCreateManyAndReturnArgs} args - Arguments to create many NextEvents.
     * @example
     * // Create many NextEvents
     * const nextEvents = await prisma.nextEvents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NextEvents and only return the `id`
     * const nextEventsWithIdOnly = await prisma.nextEvents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NextEventsCreateManyAndReturnArgs>(args?: SelectSubset<T, NextEventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NextEvents.
     * @param {NextEventsDeleteArgs} args - Arguments to delete one NextEvents.
     * @example
     * // Delete one NextEvents
     * const NextEvents = await prisma.nextEvents.delete({
     *   where: {
     *     // ... filter to delete one NextEvents
     *   }
     * })
     * 
     */
    delete<T extends NextEventsDeleteArgs>(args: SelectSubset<T, NextEventsDeleteArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NextEvents.
     * @param {NextEventsUpdateArgs} args - Arguments to update one NextEvents.
     * @example
     * // Update one NextEvents
     * const nextEvents = await prisma.nextEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NextEventsUpdateArgs>(args: SelectSubset<T, NextEventsUpdateArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NextEvents.
     * @param {NextEventsDeleteManyArgs} args - Arguments to filter NextEvents to delete.
     * @example
     * // Delete a few NextEvents
     * const { count } = await prisma.nextEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NextEventsDeleteManyArgs>(args?: SelectSubset<T, NextEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NextEvents
     * const nextEvents = await prisma.nextEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NextEventsUpdateManyArgs>(args: SelectSubset<T, NextEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextEvents and returns the data updated in the database.
     * @param {NextEventsUpdateManyAndReturnArgs} args - Arguments to update many NextEvents.
     * @example
     * // Update many NextEvents
     * const nextEvents = await prisma.nextEvents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NextEvents and only return the `id`
     * const nextEventsWithIdOnly = await prisma.nextEvents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NextEventsUpdateManyAndReturnArgs>(args: SelectSubset<T, NextEventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NextEvents.
     * @param {NextEventsUpsertArgs} args - Arguments to update or create a NextEvents.
     * @example
     * // Update or create a NextEvents
     * const nextEvents = await prisma.nextEvents.upsert({
     *   create: {
     *     // ... data to create a NextEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NextEvents we want to update
     *   }
     * })
     */
    upsert<T extends NextEventsUpsertArgs>(args: SelectSubset<T, NextEventsUpsertArgs<ExtArgs>>): Prisma__NextEventsClient<$Result.GetResult<Prisma.$NextEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NextEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsCountArgs} args - Arguments to filter NextEvents to count.
     * @example
     * // Count the number of NextEvents
     * const count = await prisma.nextEvents.count({
     *   where: {
     *     // ... the filter for the NextEvents we want to count
     *   }
     * })
    **/
    count<T extends NextEventsCountArgs>(
      args?: Subset<T, NextEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NextEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NextEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NextEventsAggregateArgs>(args: Subset<T, NextEventsAggregateArgs>): Prisma.PrismaPromise<GetNextEventsAggregateType<T>>

    /**
     * Group by NextEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextEventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NextEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NextEventsGroupByArgs['orderBy'] }
        : { orderBy?: NextEventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NextEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNextEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NextEvents model
   */
  readonly fields: NextEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NextEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NextEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NextEvents model
   */
  interface NextEventsFieldRefs {
    readonly id: FieldRef<"NextEvents", 'Int'>
    readonly name: FieldRef<"NextEvents", 'String'>
    readonly slug: FieldRef<"NextEvents", 'String'>
    readonly city: FieldRef<"NextEvents", 'String'>
    readonly location: FieldRef<"NextEvents", 'String'>
    readonly date: FieldRef<"NextEvents", 'DateTime'>
    readonly organizerName: FieldRef<"NextEvents", 'String'>
    readonly imageUrl: FieldRef<"NextEvents", 'String'>
    readonly description: FieldRef<"NextEvents", 'String'>
    readonly createdAt: FieldRef<"NextEvents", 'DateTime'>
    readonly updatedAt: FieldRef<"NextEvents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NextEvents findUnique
   */
  export type NextEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * Filter, which NextEvents to fetch.
     */
    where: NextEventsWhereUniqueInput
  }

  /**
   * NextEvents findUniqueOrThrow
   */
  export type NextEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * Filter, which NextEvents to fetch.
     */
    where: NextEventsWhereUniqueInput
  }

  /**
   * NextEvents findFirst
   */
  export type NextEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * Filter, which NextEvents to fetch.
     */
    where?: NextEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextEvents to fetch.
     */
    orderBy?: NextEventsOrderByWithRelationInput | NextEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextEvents.
     */
    cursor?: NextEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextEvents.
     */
    distinct?: NextEventsScalarFieldEnum | NextEventsScalarFieldEnum[]
  }

  /**
   * NextEvents findFirstOrThrow
   */
  export type NextEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * Filter, which NextEvents to fetch.
     */
    where?: NextEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextEvents to fetch.
     */
    orderBy?: NextEventsOrderByWithRelationInput | NextEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextEvents.
     */
    cursor?: NextEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextEvents.
     */
    distinct?: NextEventsScalarFieldEnum | NextEventsScalarFieldEnum[]
  }

  /**
   * NextEvents findMany
   */
  export type NextEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * Filter, which NextEvents to fetch.
     */
    where?: NextEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextEvents to fetch.
     */
    orderBy?: NextEventsOrderByWithRelationInput | NextEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NextEvents.
     */
    cursor?: NextEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextEvents.
     */
    skip?: number
    distinct?: NextEventsScalarFieldEnum | NextEventsScalarFieldEnum[]
  }

  /**
   * NextEvents create
   */
  export type NextEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * The data needed to create a NextEvents.
     */
    data: XOR<NextEventsCreateInput, NextEventsUncheckedCreateInput>
  }

  /**
   * NextEvents createMany
   */
  export type NextEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NextEvents.
     */
    data: NextEventsCreateManyInput | NextEventsCreateManyInput[]
  }

  /**
   * NextEvents createManyAndReturn
   */
  export type NextEventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * The data used to create many NextEvents.
     */
    data: NextEventsCreateManyInput | NextEventsCreateManyInput[]
  }

  /**
   * NextEvents update
   */
  export type NextEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * The data needed to update a NextEvents.
     */
    data: XOR<NextEventsUpdateInput, NextEventsUncheckedUpdateInput>
    /**
     * Choose, which NextEvents to update.
     */
    where: NextEventsWhereUniqueInput
  }

  /**
   * NextEvents updateMany
   */
  export type NextEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NextEvents.
     */
    data: XOR<NextEventsUpdateManyMutationInput, NextEventsUncheckedUpdateManyInput>
    /**
     * Filter which NextEvents to update
     */
    where?: NextEventsWhereInput
    /**
     * Limit how many NextEvents to update.
     */
    limit?: number
  }

  /**
   * NextEvents updateManyAndReturn
   */
  export type NextEventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * The data used to update NextEvents.
     */
    data: XOR<NextEventsUpdateManyMutationInput, NextEventsUncheckedUpdateManyInput>
    /**
     * Filter which NextEvents to update
     */
    where?: NextEventsWhereInput
    /**
     * Limit how many NextEvents to update.
     */
    limit?: number
  }

  /**
   * NextEvents upsert
   */
  export type NextEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * The filter to search for the NextEvents to update in case it exists.
     */
    where: NextEventsWhereUniqueInput
    /**
     * In case the NextEvents found by the `where` argument doesn't exist, create a new NextEvents with this data.
     */
    create: XOR<NextEventsCreateInput, NextEventsUncheckedCreateInput>
    /**
     * In case the NextEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NextEventsUpdateInput, NextEventsUncheckedUpdateInput>
  }

  /**
   * NextEvents delete
   */
  export type NextEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
    /**
     * Filter which NextEvents to delete.
     */
    where: NextEventsWhereUniqueInput
  }

  /**
   * NextEvents deleteMany
   */
  export type NextEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextEvents to delete
     */
    where?: NextEventsWhereInput
    /**
     * Limit how many NextEvents to delete.
     */
    limit?: number
  }

  /**
   * NextEvents without action
   */
  export type NextEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextEvents
     */
    select?: NextEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextEvents
     */
    omit?: NextEventsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NextEventsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    city: 'city',
    location: 'location',
    date: 'date',
    organizerName: 'organizerName',
    imageUrl: 'imageUrl',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NextEventsScalarFieldEnum = (typeof NextEventsScalarFieldEnum)[keyof typeof NextEventsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NextEventsWhereInput = {
    AND?: NextEventsWhereInput | NextEventsWhereInput[]
    OR?: NextEventsWhereInput[]
    NOT?: NextEventsWhereInput | NextEventsWhereInput[]
    id?: IntFilter<"NextEvents"> | number
    name?: StringFilter<"NextEvents"> | string
    slug?: StringFilter<"NextEvents"> | string
    city?: StringFilter<"NextEvents"> | string
    location?: StringFilter<"NextEvents"> | string
    date?: DateTimeFilter<"NextEvents"> | Date | string
    organizerName?: StringFilter<"NextEvents"> | string
    imageUrl?: StringFilter<"NextEvents"> | string
    description?: StringFilter<"NextEvents"> | string
    createdAt?: DateTimeFilter<"NextEvents"> | Date | string
    updatedAt?: DateTimeFilter<"NextEvents"> | Date | string
  }

  export type NextEventsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextEventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: NextEventsWhereInput | NextEventsWhereInput[]
    OR?: NextEventsWhereInput[]
    NOT?: NextEventsWhereInput | NextEventsWhereInput[]
    name?: StringFilter<"NextEvents"> | string
    city?: StringFilter<"NextEvents"> | string
    location?: StringFilter<"NextEvents"> | string
    date?: DateTimeFilter<"NextEvents"> | Date | string
    organizerName?: StringFilter<"NextEvents"> | string
    imageUrl?: StringFilter<"NextEvents"> | string
    description?: StringFilter<"NextEvents"> | string
    createdAt?: DateTimeFilter<"NextEvents"> | Date | string
    updatedAt?: DateTimeFilter<"NextEvents"> | Date | string
  }, "id" | "slug">

  export type NextEventsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NextEventsCountOrderByAggregateInput
    _avg?: NextEventsAvgOrderByAggregateInput
    _max?: NextEventsMaxOrderByAggregateInput
    _min?: NextEventsMinOrderByAggregateInput
    _sum?: NextEventsSumOrderByAggregateInput
  }

  export type NextEventsScalarWhereWithAggregatesInput = {
    AND?: NextEventsScalarWhereWithAggregatesInput | NextEventsScalarWhereWithAggregatesInput[]
    OR?: NextEventsScalarWhereWithAggregatesInput[]
    NOT?: NextEventsScalarWhereWithAggregatesInput | NextEventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NextEvents"> | number
    name?: StringWithAggregatesFilter<"NextEvents"> | string
    slug?: StringWithAggregatesFilter<"NextEvents"> | string
    city?: StringWithAggregatesFilter<"NextEvents"> | string
    location?: StringWithAggregatesFilter<"NextEvents"> | string
    date?: DateTimeWithAggregatesFilter<"NextEvents"> | Date | string
    organizerName?: StringWithAggregatesFilter<"NextEvents"> | string
    imageUrl?: StringWithAggregatesFilter<"NextEvents"> | string
    description?: StringWithAggregatesFilter<"NextEvents"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NextEvents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NextEvents"> | Date | string
  }

  export type NextEventsCreateInput = {
    name: string
    slug: string
    city: string
    location: string
    date: Date | string
    organizerName: string
    imageUrl: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextEventsUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    city: string
    location: string
    date: Date | string
    organizerName: string
    imageUrl: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextEventsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextEventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextEventsCreateManyInput = {
    id?: number
    name: string
    slug: string
    city: string
    location: string
    date: Date | string
    organizerName: string
    imageUrl: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextEventsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextEventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NextEventsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextEventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NextEventsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextEventsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextEventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}