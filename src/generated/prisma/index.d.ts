
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sport
 * 
 */
export type Sport = $Result.DefaultSelection<Prisma.$SportPayload>
/**
 * Model UserSport
 * 
 */
export type UserSport = $Result.DefaultSelection<Prisma.$UserSportPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model VenueSport
 * 
 */
export type VenueSport = $Result.DefaultSelection<Prisma.$VenueSportPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSport`: Exposes CRUD operations for the **UserSport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSports
    * const userSports = await prisma.userSport.findMany()
    * ```
    */
  get userSport(): Prisma.UserSportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venueSport`: Exposes CRUD operations for the **VenueSport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueSports
    * const venueSports = await prisma.venueSport.findMany()
    * ```
    */
  get venueSport(): Prisma.VenueSportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Sport: 'Sport',
    UserSport: 'UserSport',
    Availability: 'Availability',
    Group: 'Group',
    Notification: 'Notification',
    GroupMember: 'GroupMember',
    Message: 'Message',
    Venue: 'Venue',
    VenueSport: 'VenueSport',
    Event: 'Event',
    Vote: 'Vote'
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
      modelProps: "user" | "sport" | "userSport" | "availability" | "group" | "notification" | "groupMember" | "message" | "venue" | "venueSport" | "event" | "vote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sport: {
        payload: Prisma.$SportPayload<ExtArgs>
        fields: Prisma.SportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findFirst: {
            args: Prisma.SportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findMany: {
            args: Prisma.SportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          create: {
            args: Prisma.SportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          createMany: {
            args: Prisma.SportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          delete: {
            args: Prisma.SportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          update: {
            args: Prisma.SportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          deleteMany: {
            args: Prisma.SportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          upsert: {
            args: Prisma.SportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.SportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
          }
        }
      }
      UserSport: {
        payload: Prisma.$UserSportPayload<ExtArgs>
        fields: Prisma.UserSportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          findFirst: {
            args: Prisma.UserSportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          findMany: {
            args: Prisma.UserSportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          create: {
            args: Prisma.UserSportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          createMany: {
            args: Prisma.UserSportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          delete: {
            args: Prisma.UserSportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          update: {
            args: Prisma.UserSportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          deleteMany: {
            args: Prisma.UserSportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>[]
          }
          upsert: {
            args: Prisma.UserSportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPayload>
          }
          aggregate: {
            args: Prisma.UserSportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSport>
          }
          groupBy: {
            args: Prisma.UserSportGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSportGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSportCountArgs<ExtArgs>
            result: $Utils.Optional<UserSportCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      VenueSport: {
        payload: Prisma.$VenueSportPayload<ExtArgs>
        fields: Prisma.VenueSportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueSportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueSportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>
          }
          findFirst: {
            args: Prisma.VenueSportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueSportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>
          }
          findMany: {
            args: Prisma.VenueSportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>[]
          }
          create: {
            args: Prisma.VenueSportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>
          }
          createMany: {
            args: Prisma.VenueSportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueSportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>[]
          }
          delete: {
            args: Prisma.VenueSportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>
          }
          update: {
            args: Prisma.VenueSportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>
          }
          deleteMany: {
            args: Prisma.VenueSportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueSportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueSportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>[]
          }
          upsert: {
            args: Prisma.VenueSportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueSportPayload>
          }
          aggregate: {
            args: Prisma.VenueSportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueSport>
          }
          groupBy: {
            args: Prisma.VenueSportGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueSportGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueSportCountArgs<ExtArgs>
            result: $Utils.Optional<VenueSportCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    sport?: SportOmit
    userSport?: UserSportOmit
    availability?: AvailabilityOmit
    group?: GroupOmit
    notification?: NotificationOmit
    groupMember?: GroupMemberOmit
    message?: MessageOmit
    venue?: VenueOmit
    venueSport?: VenueSportOmit
    event?: EventOmit
    vote?: VoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userSports: number
    availability: number
    groupsAsCaptain: number
    groupMembers: number
    messages: number
    votes: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSports?: boolean | UserCountOutputTypeCountUserSportsArgs
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    groupsAsCaptain?: boolean | UserCountOutputTypeCountGroupsAsCaptainArgs
    groupMembers?: boolean | UserCountOutputTypeCountGroupMembersArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsAsCaptainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    userSports: number
    availability: number
    groups: number
    venueSports: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSports?: boolean | SportCountOutputTypeCountUserSportsArgs
    availability?: boolean | SportCountOutputTypeCountAvailabilityArgs
    groups?: boolean | SportCountOutputTypeCountGroupsArgs
    venueSports?: boolean | SportCountOutputTypeCountVenueSportsArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountUserSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountVenueSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueSportWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    messages: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    messages?: boolean | GroupCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    venueSports: number
    events: number
    votes: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venueSports?: boolean | VenueCountOutputTypeCountVenueSportsArgs
    events?: boolean | VenueCountOutputTypeCountEventsArgs
    votes?: boolean | VenueCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountVenueSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueSportWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    votes: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | EventCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    skill: number | null
  }

  export type UserSumAggregateOutputType = {
    skill: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    bio: string | null
    photoUrl: string | null
    skill: number | null
    onboardedAt: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    bio: string | null
    photoUrl: string | null
    skill: number | null
    onboardedAt: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    bio: number
    photoUrl: number
    skill: number
    onboardedAt: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    skill?: true
  }

  export type UserSumAggregateInputType = {
    skill?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    bio?: true
    photoUrl?: true
    skill?: true
    onboardedAt?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    bio?: true
    photoUrl?: true
    skill?: true
    onboardedAt?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    bio?: true
    photoUrl?: true
    skill?: true
    onboardedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    bio: string | null
    photoUrl: string | null
    skill: number
    onboardedAt: Date | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    bio?: boolean
    photoUrl?: boolean
    skill?: boolean
    onboardedAt?: boolean
    createdAt?: boolean
    userSports?: boolean | User$userSportsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    groupsAsCaptain?: boolean | User$groupsAsCaptainArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    bio?: boolean
    photoUrl?: boolean
    skill?: boolean
    onboardedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    bio?: boolean
    photoUrl?: boolean
    skill?: boolean
    onboardedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    bio?: boolean
    photoUrl?: boolean
    skill?: boolean
    onboardedAt?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "bio" | "photoUrl" | "skill" | "onboardedAt" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSports?: boolean | User$userSportsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    groupsAsCaptain?: boolean | User$groupsAsCaptainArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userSports: Prisma.$UserSportPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      groupsAsCaptain: Prisma.$GroupPayload<ExtArgs>[]
      groupMembers: Prisma.$GroupMemberPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      bio: string | null
      photoUrl: string | null
      skill: number
      onboardedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSports<T extends User$userSportsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupsAsCaptain<T extends User$groupsAsCaptainArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsAsCaptainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMembers<T extends User$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly skill: FieldRef<"User", 'Int'>
    readonly onboardedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userSports
   */
  export type User$userSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * User.groupsAsCaptain
   */
  export type User$groupsAsCaptainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.groupMembers
   */
  export type User$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportAvgAggregateOutputType = {
    minGroup: number | null
    maxGroup: number | null
  }

  export type SportSumAggregateOutputType = {
    minGroup: number | null
    maxGroup: number | null
  }

  export type SportMinAggregateOutputType = {
    id: string | null
    name: string | null
    minGroup: number | null
    maxGroup: number | null
  }

  export type SportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    minGroup: number | null
    maxGroup: number | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    name: number
    minGroup: number
    maxGroup: number
    _all: number
  }


  export type SportAvgAggregateInputType = {
    minGroup?: true
    maxGroup?: true
  }

  export type SportSumAggregateInputType = {
    minGroup?: true
    maxGroup?: true
  }

  export type SportMinAggregateInputType = {
    id?: true
    name?: true
    minGroup?: true
    maxGroup?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    name?: true
    minGroup?: true
    maxGroup?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    name?: true
    minGroup?: true
    maxGroup?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport to aggregate.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportWhereInput
    orderBy?: SportOrderByWithAggregationInput | SportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _avg?: SportAvgAggregateInputType
    _sum?: SportSumAggregateInputType
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id: string
    name: string
    minGroup: number
    maxGroup: number
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minGroup?: boolean
    maxGroup?: boolean
    userSports?: boolean | Sport$userSportsArgs<ExtArgs>
    availability?: boolean | Sport$availabilityArgs<ExtArgs>
    groups?: boolean | Sport$groupsArgs<ExtArgs>
    venueSports?: boolean | Sport$venueSportsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minGroup?: boolean
    maxGroup?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minGroup?: boolean
    maxGroup?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id?: boolean
    name?: boolean
    minGroup?: boolean
    maxGroup?: boolean
  }

  export type SportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "minGroup" | "maxGroup", ExtArgs["result"]["sport"]>
  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSports?: boolean | Sport$userSportsArgs<ExtArgs>
    availability?: boolean | Sport$availabilityArgs<ExtArgs>
    groups?: boolean | Sport$groupsArgs<ExtArgs>
    venueSports?: boolean | Sport$venueSportsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      userSports: Prisma.$UserSportPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      venueSports: Prisma.$VenueSportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      minGroup: number
      maxGroup: number
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type SportGetPayload<S extends boolean | null | undefined | SportDefaultArgs> = $Result.GetResult<Prisma.$SportPayload, S>

  type SportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface SportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport'], meta: { name: 'Sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportFindUniqueArgs>(args: SelectSubset<T, SportFindUniqueArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(args: SelectSubset<T, SportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportFindFirstArgs>(args?: SelectSubset<T, SportFindFirstArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(args?: SelectSubset<T, SportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportFindManyArgs>(args?: SelectSubset<T, SportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends SportCreateArgs>(args: SelectSubset<T, SportCreateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {SportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportCreateManyArgs>(args?: SelectSubset<T, SportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportCreateManyAndReturnArgs>(args?: SelectSubset<T, SportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends SportDeleteArgs>(args: SelectSubset<T, SportDeleteArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportUpdateArgs>(args: SelectSubset<T, SportUpdateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportDeleteManyArgs>(args?: SelectSubset<T, SportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportUpdateManyArgs>(args: SelectSubset<T, SportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {SportUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.updateManyAndReturn({
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
    updateManyAndReturn<T extends SportUpdateManyAndReturnArgs>(args: SelectSubset<T, SportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends SportUpsertArgs>(args: SelectSubset<T, SportUpsertArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
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
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport model
   */
  readonly fields: SportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSports<T extends Sport$userSportsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$userSportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends Sport$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Sport$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Sport$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venueSports<T extends Sport$venueSportsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$venueSportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sport model
   */
  interface SportFieldRefs {
    readonly id: FieldRef<"Sport", 'String'>
    readonly name: FieldRef<"Sport", 'String'>
    readonly minGroup: FieldRef<"Sport", 'Int'>
    readonly maxGroup: FieldRef<"Sport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sport findUnique
   */
  export type SportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findFirst
   */
  export type SportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findMany
   */
  export type SportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport create
   */
  export type SportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport.
     */
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }

  /**
   * Sport createMany
   */
  export type SportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
  }

  /**
   * Sport createManyAndReturn
   */
  export type SportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
  }

  /**
   * Sport update
   */
  export type SportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport.
     */
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport updateManyAndReturn
   */
  export type SportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport upsert
   */
  export type SportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport to update in case it exists.
     */
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     */
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }

  /**
   * Sport delete
   */
  export type SportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter which Sport to delete.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to delete.
     */
    limit?: number
  }

  /**
   * Sport.userSports
   */
  export type Sport$userSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    cursor?: UserSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * Sport.availability
   */
  export type Sport$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Sport.groups
   */
  export type Sport$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Sport.venueSports
   */
  export type Sport$venueSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    where?: VenueSportWhereInput
    orderBy?: VenueSportOrderByWithRelationInput | VenueSportOrderByWithRelationInput[]
    cursor?: VenueSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueSportScalarFieldEnum | VenueSportScalarFieldEnum[]
  }

  /**
   * Sport without action
   */
  export type SportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
  }


  /**
   * Model UserSport
   */

  export type AggregateUserSport = {
    _count: UserSportCountAggregateOutputType | null
    _min: UserSportMinAggregateOutputType | null
    _max: UserSportMaxAggregateOutputType | null
  }

  export type UserSportMinAggregateOutputType = {
    userId: string | null
    sportId: string | null
  }

  export type UserSportMaxAggregateOutputType = {
    userId: string | null
    sportId: string | null
  }

  export type UserSportCountAggregateOutputType = {
    userId: number
    sportId: number
    _all: number
  }


  export type UserSportMinAggregateInputType = {
    userId?: true
    sportId?: true
  }

  export type UserSportMaxAggregateInputType = {
    userId?: true
    sportId?: true
  }

  export type UserSportCountAggregateInputType = {
    userId?: true
    sportId?: true
    _all?: true
  }

  export type UserSportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSport to aggregate.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSports
    **/
    _count?: true | UserSportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSportMaxAggregateInputType
  }

  export type GetUserSportAggregateType<T extends UserSportAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSport[P]>
      : GetScalarType<T[P], AggregateUserSport[P]>
  }




  export type UserSportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportWhereInput
    orderBy?: UserSportOrderByWithAggregationInput | UserSportOrderByWithAggregationInput[]
    by: UserSportScalarFieldEnum[] | UserSportScalarFieldEnum
    having?: UserSportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSportCountAggregateInputType | true
    _min?: UserSportMinAggregateInputType
    _max?: UserSportMaxAggregateInputType
  }

  export type UserSportGroupByOutputType = {
    userId: string
    sportId: string
    _count: UserSportCountAggregateOutputType | null
    _min: UserSportMinAggregateOutputType | null
    _max: UserSportMaxAggregateOutputType | null
  }

  type GetUserSportGroupByPayload<T extends UserSportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSportGroupByOutputType[P]>
            : GetScalarType<T[P], UserSportGroupByOutputType[P]>
        }
      >
    >


  export type UserSportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sportId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sportId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    sportId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSport"]>

  export type UserSportSelectScalar = {
    userId?: boolean
    sportId?: boolean
  }

  export type UserSportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "sportId", ExtArgs["result"]["userSport"]>
  export type UserSportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type UserSportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type UserSportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $UserSportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      sportId: string
    }, ExtArgs["result"]["userSport"]>
    composites: {}
  }

  type UserSportGetPayload<S extends boolean | null | undefined | UserSportDefaultArgs> = $Result.GetResult<Prisma.$UserSportPayload, S>

  type UserSportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSportCountAggregateInputType | true
    }

  export interface UserSportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSport'], meta: { name: 'UserSport' } }
    /**
     * Find zero or one UserSport that matches the filter.
     * @param {UserSportFindUniqueArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSportFindUniqueArgs>(args: SelectSubset<T, UserSportFindUniqueArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSportFindUniqueOrThrowArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSportFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindFirstArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSportFindFirstArgs>(args?: SelectSubset<T, UserSportFindFirstArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindFirstOrThrowArgs} args - Arguments to find a UserSport
     * @example
     * // Get one UserSport
     * const userSport = await prisma.userSport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSportFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSportFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSports
     * const userSports = await prisma.userSport.findMany()
     * 
     * // Get first 10 UserSports
     * const userSports = await prisma.userSport.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userSportWithUserIdOnly = await prisma.userSport.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserSportFindManyArgs>(args?: SelectSubset<T, UserSportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSport.
     * @param {UserSportCreateArgs} args - Arguments to create a UserSport.
     * @example
     * // Create one UserSport
     * const UserSport = await prisma.userSport.create({
     *   data: {
     *     // ... data to create a UserSport
     *   }
     * })
     * 
     */
    create<T extends UserSportCreateArgs>(args: SelectSubset<T, UserSportCreateArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSports.
     * @param {UserSportCreateManyArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSport = await prisma.userSport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSportCreateManyArgs>(args?: SelectSubset<T, UserSportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSports and returns the data saved in the database.
     * @param {UserSportCreateManyAndReturnArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSport = await prisma.userSport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSports and only return the `userId`
     * const userSportWithUserIdOnly = await prisma.userSport.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSportCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSport.
     * @param {UserSportDeleteArgs} args - Arguments to delete one UserSport.
     * @example
     * // Delete one UserSport
     * const UserSport = await prisma.userSport.delete({
     *   where: {
     *     // ... filter to delete one UserSport
     *   }
     * })
     * 
     */
    delete<T extends UserSportDeleteArgs>(args: SelectSubset<T, UserSportDeleteArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSport.
     * @param {UserSportUpdateArgs} args - Arguments to update one UserSport.
     * @example
     * // Update one UserSport
     * const userSport = await prisma.userSport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSportUpdateArgs>(args: SelectSubset<T, UserSportUpdateArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSports.
     * @param {UserSportDeleteManyArgs} args - Arguments to filter UserSports to delete.
     * @example
     * // Delete a few UserSports
     * const { count } = await prisma.userSport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSportDeleteManyArgs>(args?: SelectSubset<T, UserSportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSports
     * const userSport = await prisma.userSport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSportUpdateManyArgs>(args: SelectSubset<T, UserSportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports and returns the data updated in the database.
     * @param {UserSportUpdateManyAndReturnArgs} args - Arguments to update many UserSports.
     * @example
     * // Update many UserSports
     * const userSport = await prisma.userSport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSports and only return the `userId`
     * const userSportWithUserIdOnly = await prisma.userSport.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserSportUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSport.
     * @param {UserSportUpsertArgs} args - Arguments to update or create a UserSport.
     * @example
     * // Update or create a UserSport
     * const userSport = await prisma.userSport.upsert({
     *   create: {
     *     // ... data to create a UserSport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSport we want to update
     *   }
     * })
     */
    upsert<T extends UserSportUpsertArgs>(args: SelectSubset<T, UserSportUpsertArgs<ExtArgs>>): Prisma__UserSportClient<$Result.GetResult<Prisma.$UserSportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportCountArgs} args - Arguments to filter UserSports to count.
     * @example
     * // Count the number of UserSports
     * const count = await prisma.userSport.count({
     *   where: {
     *     // ... the filter for the UserSports we want to count
     *   }
     * })
    **/
    count<T extends UserSportCountArgs>(
      args?: Subset<T, UserSportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSportAggregateArgs>(args: Subset<T, UserSportAggregateArgs>): Prisma.PrismaPromise<GetUserSportAggregateType<T>>

    /**
     * Group by UserSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportGroupByArgs} args - Group by arguments.
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
      T extends UserSportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSportGroupByArgs['orderBy'] }
        : { orderBy?: UserSportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSport model
   */
  readonly fields: UserSportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSport model
   */
  interface UserSportFieldRefs {
    readonly userId: FieldRef<"UserSport", 'String'>
    readonly sportId: FieldRef<"UserSport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSport findUnique
   */
  export type UserSportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport findUniqueOrThrow
   */
  export type UserSportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport findFirst
   */
  export type UserSportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport findFirstOrThrow
   */
  export type UserSportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSport to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport findMany
   */
  export type UserSportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where?: UserSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportOrderByWithRelationInput | UserSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSports.
     */
    cursor?: UserSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    distinct?: UserSportScalarFieldEnum | UserSportScalarFieldEnum[]
  }

  /**
   * UserSport create
   */
  export type UserSportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSport.
     */
    data: XOR<UserSportCreateInput, UserSportUncheckedCreateInput>
  }

  /**
   * UserSport createMany
   */
  export type UserSportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSports.
     */
    data: UserSportCreateManyInput | UserSportCreateManyInput[]
  }

  /**
   * UserSport createManyAndReturn
   */
  export type UserSportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * The data used to create many UserSports.
     */
    data: UserSportCreateManyInput | UserSportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSport update
   */
  export type UserSportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSport.
     */
    data: XOR<UserSportUpdateInput, UserSportUncheckedUpdateInput>
    /**
     * Choose, which UserSport to update.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport updateMany
   */
  export type UserSportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportWhereInput
    /**
     * Limit how many UserSports to update.
     */
    limit?: number
  }

  /**
   * UserSport updateManyAndReturn
   */
  export type UserSportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportWhereInput
    /**
     * Limit how many UserSports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSport upsert
   */
  export type UserSportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSport to update in case it exists.
     */
    where: UserSportWhereUniqueInput
    /**
     * In case the UserSport found by the `where` argument doesn't exist, create a new UserSport with this data.
     */
    create: XOR<UserSportCreateInput, UserSportUncheckedCreateInput>
    /**
     * In case the UserSport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSportUpdateInput, UserSportUncheckedUpdateInput>
  }

  /**
   * UserSport delete
   */
  export type UserSportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
    /**
     * Filter which UserSport to delete.
     */
    where: UserSportWhereUniqueInput
  }

  /**
   * UserSport deleteMany
   */
  export type UserSportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSports to delete
     */
    where?: UserSportWhereInput
    /**
     * Limit how many UserSports to delete.
     */
    limit?: number
  }

  /**
   * UserSport without action
   */
  export type UserSportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSport
     */
    select?: UserSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSport
     */
    omit?: UserSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    sportId: string | null
    status: string | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    sportId: string | null
    status: string | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    sportId: number
    status: number
    _all: number
  }


  export type AvailabilityMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    sportId?: true
    status?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    sportId?: true
    status?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    sportId?: true
    status?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    userId: string
    date: string
    sportId: string
    status: string
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    sportId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    sportId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    sportId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    sportId?: boolean
    status?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "sportId" | "status", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: string
      sportId: string
      status: string
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly userId: FieldRef<"Availability", 'String'>
    readonly date: FieldRef<"Availability", 'String'>
    readonly sportId: FieldRef<"Availability", 'String'>
    readonly status: FieldRef<"Availability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    sportId: string | null
    date: string | null
    captainId: string | null
    status: string | null
    shareCode: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    sportId: string | null
    date: string | null
    captainId: string | null
    status: string | null
    shareCode: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    sportId: number
    date: number
    captainId: number
    status: number
    shareCode: number
    createdAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    sportId?: true
    date?: true
    captainId?: true
    status?: true
    shareCode?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    sportId?: true
    date?: true
    captainId?: true
    status?: true
    shareCode?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    sportId?: true
    date?: true
    captainId?: true
    status?: true
    shareCode?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    sportId: string
    date: string
    captainId: string
    status: string
    shareCode: string | null
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportId?: boolean
    date?: boolean
    captainId?: boolean
    status?: boolean
    shareCode?: boolean
    createdAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    captain?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    messages?: boolean | Group$messagesArgs<ExtArgs>
    event?: boolean | Group$eventArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportId?: boolean
    date?: boolean
    captainId?: boolean
    status?: boolean
    shareCode?: boolean
    createdAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportId?: boolean
    date?: boolean
    captainId?: boolean
    status?: boolean
    shareCode?: boolean
    createdAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    sportId?: boolean
    date?: boolean
    captainId?: boolean
    status?: boolean
    shareCode?: boolean
    createdAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sportId" | "date" | "captainId" | "status" | "shareCode" | "createdAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    captain?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    messages?: boolean | Group$messagesArgs<ExtArgs>
    event?: boolean | Group$eventArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      sport: Prisma.$SportPayload<ExtArgs>
      captain: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sportId: string
      date: string
      captainId: string
      status: string
      shareCode: string | null
      createdAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    captain<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Group$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Group$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends Group$eventArgs<ExtArgs> = {}>(args?: Subset<T, Group$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly sportId: FieldRef<"Group", 'String'>
    readonly date: FieldRef<"Group", 'String'>
    readonly captainId: FieldRef<"Group", 'String'>
    readonly status: FieldRef<"Group", 'String'>
    readonly shareCode: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.messages
   */
  export type Group$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Group.event
   */
  export type Group$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kind: string | null
    title: string | null
    body: string | null
    link: string | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kind: string | null
    title: string | null
    body: string | null
    link: string | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    kind: number
    title: number
    body: number
    link: number
    readAt: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    kind?: true
    title?: true
    body?: true
    link?: true
    readAt?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    kind?: true
    title?: true
    body?: true
    link?: true
    readAt?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    kind?: true
    title?: true
    body?: true
    link?: true
    readAt?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    kind: string
    title: string
    body: string
    link: string | null
    readAt: Date | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kind?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    readAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kind?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    readAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kind?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    readAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    kind?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    readAt?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kind" | "title" | "body" | "link" | "readAt" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kind: string
      title: string
      body: string
      link: string | null
      readAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly kind: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    groupId: string | null
    userId: string | null
    confirmed: boolean | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    groupId: string | null
    userId: string | null
    confirmed: boolean | null
  }

  export type GroupMemberCountAggregateOutputType = {
    groupId: number
    userId: number
    confirmed: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    groupId?: true
    userId?: true
    confirmed?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    groupId?: true
    userId?: true
    confirmed?: true
  }

  export type GroupMemberCountAggregateInputType = {
    groupId?: true
    userId?: true
    confirmed?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    groupId: string
    userId: string
    confirmed: boolean
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    confirmed?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    confirmed?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    confirmed?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    groupId?: boolean
    userId?: boolean
    confirmed?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupId" | "userId" | "confirmed", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      groupId: string
      userId: string
      confirmed: boolean
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.findMany({ select: { groupId: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { groupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { groupId: true },
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
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly confirmed: FieldRef<"GroupMember", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    text: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    text?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    text?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    text: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    text?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    text?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    text?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "text" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly groupId: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    pricePerHour: number | null
  }

  export type VenueSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    pricePerHour: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    lat: number | null
    lng: number | null
    pricePerHour: number | null
    address: string | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    lat: number | null
    lng: number | null
    pricePerHour: number | null
    address: string | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    city: number
    lat: number
    lng: number
    pricePerHour: number
    address: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    lat?: true
    lng?: true
    pricePerHour?: true
  }

  export type VenueSumAggregateInputType = {
    lat?: true
    lng?: true
    pricePerHour?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    lat?: true
    lng?: true
    pricePerHour?: true
    address?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    lat?: true
    lng?: true
    pricePerHour?: true
    address?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    lat?: true
    lng?: true
    pricePerHour?: true
    address?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    city: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    pricePerHour?: boolean
    address?: boolean
    venueSports?: boolean | Venue$venueSportsArgs<ExtArgs>
    events?: boolean | Venue$eventsArgs<ExtArgs>
    votes?: boolean | Venue$votesArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    pricePerHour?: boolean
    address?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    pricePerHour?: boolean
    address?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    pricePerHour?: boolean
    address?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "lat" | "lng" | "pricePerHour" | "address", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venueSports?: boolean | Venue$venueSportsArgs<ExtArgs>
    events?: boolean | Venue$eventsArgs<ExtArgs>
    votes?: boolean | Venue$votesArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      venueSports: Prisma.$VenueSportPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city: string
      lat: number
      lng: number
      pricePerHour: number
      address: string
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
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
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venueSports<T extends Venue$venueSportsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$venueSportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Venue$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Venue$votesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly city: FieldRef<"Venue", 'String'>
    readonly lat: FieldRef<"Venue", 'Float'>
    readonly lng: FieldRef<"Venue", 'Float'>
    readonly pricePerHour: FieldRef<"Venue", 'Int'>
    readonly address: FieldRef<"Venue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.venueSports
   */
  export type Venue$venueSportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    where?: VenueSportWhereInput
    orderBy?: VenueSportOrderByWithRelationInput | VenueSportOrderByWithRelationInput[]
    cursor?: VenueSportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueSportScalarFieldEnum | VenueSportScalarFieldEnum[]
  }

  /**
   * Venue.events
   */
  export type Venue$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Venue.votes
   */
  export type Venue$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model VenueSport
   */

  export type AggregateVenueSport = {
    _count: VenueSportCountAggregateOutputType | null
    _min: VenueSportMinAggregateOutputType | null
    _max: VenueSportMaxAggregateOutputType | null
  }

  export type VenueSportMinAggregateOutputType = {
    venueId: string | null
    sportId: string | null
  }

  export type VenueSportMaxAggregateOutputType = {
    venueId: string | null
    sportId: string | null
  }

  export type VenueSportCountAggregateOutputType = {
    venueId: number
    sportId: number
    _all: number
  }


  export type VenueSportMinAggregateInputType = {
    venueId?: true
    sportId?: true
  }

  export type VenueSportMaxAggregateInputType = {
    venueId?: true
    sportId?: true
  }

  export type VenueSportCountAggregateInputType = {
    venueId?: true
    sportId?: true
    _all?: true
  }

  export type VenueSportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueSport to aggregate.
     */
    where?: VenueSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueSports to fetch.
     */
    orderBy?: VenueSportOrderByWithRelationInput | VenueSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueSports
    **/
    _count?: true | VenueSportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueSportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueSportMaxAggregateInputType
  }

  export type GetVenueSportAggregateType<T extends VenueSportAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueSport[P]>
      : GetScalarType<T[P], AggregateVenueSport[P]>
  }




  export type VenueSportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueSportWhereInput
    orderBy?: VenueSportOrderByWithAggregationInput | VenueSportOrderByWithAggregationInput[]
    by: VenueSportScalarFieldEnum[] | VenueSportScalarFieldEnum
    having?: VenueSportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueSportCountAggregateInputType | true
    _min?: VenueSportMinAggregateInputType
    _max?: VenueSportMaxAggregateInputType
  }

  export type VenueSportGroupByOutputType = {
    venueId: string
    sportId: string
    _count: VenueSportCountAggregateOutputType | null
    _min: VenueSportMinAggregateOutputType | null
    _max: VenueSportMaxAggregateOutputType | null
  }

  type GetVenueSportGroupByPayload<T extends VenueSportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueSportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueSportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueSportGroupByOutputType[P]>
            : GetScalarType<T[P], VenueSportGroupByOutputType[P]>
        }
      >
    >


  export type VenueSportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venueId?: boolean
    sportId?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueSport"]>

  export type VenueSportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venueId?: boolean
    sportId?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueSport"]>

  export type VenueSportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venueId?: boolean
    sportId?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueSport"]>

  export type VenueSportSelectScalar = {
    venueId?: boolean
    sportId?: boolean
  }

  export type VenueSportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"venueId" | "sportId", ExtArgs["result"]["venueSport"]>
  export type VenueSportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type VenueSportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type VenueSportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $VenueSportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueSport"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      sport: Prisma.$SportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      venueId: string
      sportId: string
    }, ExtArgs["result"]["venueSport"]>
    composites: {}
  }

  type VenueSportGetPayload<S extends boolean | null | undefined | VenueSportDefaultArgs> = $Result.GetResult<Prisma.$VenueSportPayload, S>

  type VenueSportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueSportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueSportCountAggregateInputType | true
    }

  export interface VenueSportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueSport'], meta: { name: 'VenueSport' } }
    /**
     * Find zero or one VenueSport that matches the filter.
     * @param {VenueSportFindUniqueArgs} args - Arguments to find a VenueSport
     * @example
     * // Get one VenueSport
     * const venueSport = await prisma.venueSport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueSportFindUniqueArgs>(args: SelectSubset<T, VenueSportFindUniqueArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenueSport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueSportFindUniqueOrThrowArgs} args - Arguments to find a VenueSport
     * @example
     * // Get one VenueSport
     * const venueSport = await prisma.venueSport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueSportFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueSportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueSport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportFindFirstArgs} args - Arguments to find a VenueSport
     * @example
     * // Get one VenueSport
     * const venueSport = await prisma.venueSport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueSportFindFirstArgs>(args?: SelectSubset<T, VenueSportFindFirstArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueSport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportFindFirstOrThrowArgs} args - Arguments to find a VenueSport
     * @example
     * // Get one VenueSport
     * const venueSport = await prisma.venueSport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueSportFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueSportFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenueSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueSports
     * const venueSports = await prisma.venueSport.findMany()
     * 
     * // Get first 10 VenueSports
     * const venueSports = await prisma.venueSport.findMany({ take: 10 })
     * 
     * // Only select the `venueId`
     * const venueSportWithVenueIdOnly = await prisma.venueSport.findMany({ select: { venueId: true } })
     * 
     */
    findMany<T extends VenueSportFindManyArgs>(args?: SelectSubset<T, VenueSportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenueSport.
     * @param {VenueSportCreateArgs} args - Arguments to create a VenueSport.
     * @example
     * // Create one VenueSport
     * const VenueSport = await prisma.venueSport.create({
     *   data: {
     *     // ... data to create a VenueSport
     *   }
     * })
     * 
     */
    create<T extends VenueSportCreateArgs>(args: SelectSubset<T, VenueSportCreateArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenueSports.
     * @param {VenueSportCreateManyArgs} args - Arguments to create many VenueSports.
     * @example
     * // Create many VenueSports
     * const venueSport = await prisma.venueSport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueSportCreateManyArgs>(args?: SelectSubset<T, VenueSportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueSports and returns the data saved in the database.
     * @param {VenueSportCreateManyAndReturnArgs} args - Arguments to create many VenueSports.
     * @example
     * // Create many VenueSports
     * const venueSport = await prisma.venueSport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueSports and only return the `venueId`
     * const venueSportWithVenueIdOnly = await prisma.venueSport.createManyAndReturn({
     *   select: { venueId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueSportCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueSportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VenueSport.
     * @param {VenueSportDeleteArgs} args - Arguments to delete one VenueSport.
     * @example
     * // Delete one VenueSport
     * const VenueSport = await prisma.venueSport.delete({
     *   where: {
     *     // ... filter to delete one VenueSport
     *   }
     * })
     * 
     */
    delete<T extends VenueSportDeleteArgs>(args: SelectSubset<T, VenueSportDeleteArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenueSport.
     * @param {VenueSportUpdateArgs} args - Arguments to update one VenueSport.
     * @example
     * // Update one VenueSport
     * const venueSport = await prisma.venueSport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueSportUpdateArgs>(args: SelectSubset<T, VenueSportUpdateArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenueSports.
     * @param {VenueSportDeleteManyArgs} args - Arguments to filter VenueSports to delete.
     * @example
     * // Delete a few VenueSports
     * const { count } = await prisma.venueSport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueSportDeleteManyArgs>(args?: SelectSubset<T, VenueSportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueSports
     * const venueSport = await prisma.venueSport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueSportUpdateManyArgs>(args: SelectSubset<T, VenueSportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueSports and returns the data updated in the database.
     * @param {VenueSportUpdateManyAndReturnArgs} args - Arguments to update many VenueSports.
     * @example
     * // Update many VenueSports
     * const venueSport = await prisma.venueSport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VenueSports and only return the `venueId`
     * const venueSportWithVenueIdOnly = await prisma.venueSport.updateManyAndReturn({
     *   select: { venueId: true },
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
    updateManyAndReturn<T extends VenueSportUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueSportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VenueSport.
     * @param {VenueSportUpsertArgs} args - Arguments to update or create a VenueSport.
     * @example
     * // Update or create a VenueSport
     * const venueSport = await prisma.venueSport.upsert({
     *   create: {
     *     // ... data to create a VenueSport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueSport we want to update
     *   }
     * })
     */
    upsert<T extends VenueSportUpsertArgs>(args: SelectSubset<T, VenueSportUpsertArgs<ExtArgs>>): Prisma__VenueSportClient<$Result.GetResult<Prisma.$VenueSportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenueSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportCountArgs} args - Arguments to filter VenueSports to count.
     * @example
     * // Count the number of VenueSports
     * const count = await prisma.venueSport.count({
     *   where: {
     *     // ... the filter for the VenueSports we want to count
     *   }
     * })
    **/
    count<T extends VenueSportCountArgs>(
      args?: Subset<T, VenueSportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueSportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueSportAggregateArgs>(args: Subset<T, VenueSportAggregateArgs>): Prisma.PrismaPromise<GetVenueSportAggregateType<T>>

    /**
     * Group by VenueSport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueSportGroupByArgs} args - Group by arguments.
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
      T extends VenueSportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueSportGroupByArgs['orderBy'] }
        : { orderBy?: VenueSportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueSportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueSport model
   */
  readonly fields: VenueSportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueSport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueSportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VenueSport model
   */
  interface VenueSportFieldRefs {
    readonly venueId: FieldRef<"VenueSport", 'String'>
    readonly sportId: FieldRef<"VenueSport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VenueSport findUnique
   */
  export type VenueSportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * Filter, which VenueSport to fetch.
     */
    where: VenueSportWhereUniqueInput
  }

  /**
   * VenueSport findUniqueOrThrow
   */
  export type VenueSportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * Filter, which VenueSport to fetch.
     */
    where: VenueSportWhereUniqueInput
  }

  /**
   * VenueSport findFirst
   */
  export type VenueSportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * Filter, which VenueSport to fetch.
     */
    where?: VenueSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueSports to fetch.
     */
    orderBy?: VenueSportOrderByWithRelationInput | VenueSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueSports.
     */
    cursor?: VenueSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueSports.
     */
    distinct?: VenueSportScalarFieldEnum | VenueSportScalarFieldEnum[]
  }

  /**
   * VenueSport findFirstOrThrow
   */
  export type VenueSportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * Filter, which VenueSport to fetch.
     */
    where?: VenueSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueSports to fetch.
     */
    orderBy?: VenueSportOrderByWithRelationInput | VenueSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueSports.
     */
    cursor?: VenueSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueSports.
     */
    distinct?: VenueSportScalarFieldEnum | VenueSportScalarFieldEnum[]
  }

  /**
   * VenueSport findMany
   */
  export type VenueSportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * Filter, which VenueSports to fetch.
     */
    where?: VenueSportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueSports to fetch.
     */
    orderBy?: VenueSportOrderByWithRelationInput | VenueSportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueSports.
     */
    cursor?: VenueSportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueSports.
     */
    skip?: number
    distinct?: VenueSportScalarFieldEnum | VenueSportScalarFieldEnum[]
  }

  /**
   * VenueSport create
   */
  export type VenueSportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueSport.
     */
    data: XOR<VenueSportCreateInput, VenueSportUncheckedCreateInput>
  }

  /**
   * VenueSport createMany
   */
  export type VenueSportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueSports.
     */
    data: VenueSportCreateManyInput | VenueSportCreateManyInput[]
  }

  /**
   * VenueSport createManyAndReturn
   */
  export type VenueSportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * The data used to create many VenueSports.
     */
    data: VenueSportCreateManyInput | VenueSportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueSport update
   */
  export type VenueSportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueSport.
     */
    data: XOR<VenueSportUpdateInput, VenueSportUncheckedUpdateInput>
    /**
     * Choose, which VenueSport to update.
     */
    where: VenueSportWhereUniqueInput
  }

  /**
   * VenueSport updateMany
   */
  export type VenueSportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueSports.
     */
    data: XOR<VenueSportUpdateManyMutationInput, VenueSportUncheckedUpdateManyInput>
    /**
     * Filter which VenueSports to update
     */
    where?: VenueSportWhereInput
    /**
     * Limit how many VenueSports to update.
     */
    limit?: number
  }

  /**
   * VenueSport updateManyAndReturn
   */
  export type VenueSportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * The data used to update VenueSports.
     */
    data: XOR<VenueSportUpdateManyMutationInput, VenueSportUncheckedUpdateManyInput>
    /**
     * Filter which VenueSports to update
     */
    where?: VenueSportWhereInput
    /**
     * Limit how many VenueSports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueSport upsert
   */
  export type VenueSportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueSport to update in case it exists.
     */
    where: VenueSportWhereUniqueInput
    /**
     * In case the VenueSport found by the `where` argument doesn't exist, create a new VenueSport with this data.
     */
    create: XOR<VenueSportCreateInput, VenueSportUncheckedCreateInput>
    /**
     * In case the VenueSport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueSportUpdateInput, VenueSportUncheckedUpdateInput>
  }

  /**
   * VenueSport delete
   */
  export type VenueSportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
    /**
     * Filter which VenueSport to delete.
     */
    where: VenueSportWhereUniqueInput
  }

  /**
   * VenueSport deleteMany
   */
  export type VenueSportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueSports to delete
     */
    where?: VenueSportWhereInput
    /**
     * Limit how many VenueSports to delete.
     */
    limit?: number
  }

  /**
   * VenueSport without action
   */
  export type VenueSportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueSport
     */
    select?: VenueSportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueSport
     */
    omit?: VenueSportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueSportInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    venueId: string | null
    startsAt: Date | null
    weatherSummary: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    venueId: string | null
    startsAt: Date | null
    weatherSummary: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    groupId: number
    venueId: number
    startsAt: number
    weatherSummary: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    groupId?: true
    venueId?: true
    startsAt?: true
    weatherSummary?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    groupId?: true
    venueId?: true
    startsAt?: true
    weatherSummary?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    groupId?: true
    venueId?: true
    startsAt?: true
    weatherSummary?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    groupId: string
    venueId: string
    startsAt: Date
    weatherSummary: string | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    venueId?: boolean
    startsAt?: boolean
    weatherSummary?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    votes?: boolean | Event$votesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    venueId?: boolean
    startsAt?: boolean
    weatherSummary?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    venueId?: boolean
    startsAt?: boolean
    weatherSummary?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    groupId?: boolean
    venueId?: boolean
    startsAt?: boolean
    weatherSummary?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "venueId" | "startsAt" | "weatherSummary", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    votes?: boolean | Event$votesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      venueId: string
      startsAt: Date
      weatherSummary: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Event$votesArgs<ExtArgs> = {}>(args?: Subset<T, Event$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly groupId: FieldRef<"Event", 'String'>
    readonly venueId: FieldRef<"Event", 'String'>
    readonly startsAt: FieldRef<"Event", 'DateTime'>
    readonly weatherSummary: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.votes
   */
  export type Event$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    venueId: string | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    venueId: string | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    venueId: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    venueId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    venueId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    venueId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    venueId: string
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    venueId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    venueId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    venueId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    venueId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "venueId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      venueId: string
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
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
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly eventId: FieldRef<"Vote", 'String'>
    readonly userId: FieldRef<"Vote", 'String'>
    readonly venueId: FieldRef<"Vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    bio: 'bio',
    photoUrl: 'photoUrl',
    skill: 'skill',
    onboardedAt: 'onboardedAt',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    minGroup: 'minGroup',
    maxGroup: 'maxGroup'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const UserSportScalarFieldEnum: {
    userId: 'userId',
    sportId: 'sportId'
  };

  export type UserSportScalarFieldEnum = (typeof UserSportScalarFieldEnum)[keyof typeof UserSportScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    sportId: 'sportId',
    status: 'status'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    sportId: 'sportId',
    date: 'date',
    captainId: 'captainId',
    status: 'status',
    shareCode: 'shareCode',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kind: 'kind',
    title: 'title',
    body: 'body',
    link: 'link',
    readAt: 'readAt',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    groupId: 'groupId',
    userId: 'userId',
    confirmed: 'confirmed'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    lat: 'lat',
    lng: 'lng',
    pricePerHour: 'pricePerHour',
    address: 'address'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const VenueSportScalarFieldEnum: {
    venueId: 'venueId',
    sportId: 'sportId'
  };

  export type VenueSportScalarFieldEnum = (typeof VenueSportScalarFieldEnum)[keyof typeof VenueSportScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    venueId: 'venueId',
    startsAt: 'startsAt',
    weatherSummary: 'weatherSummary'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    venueId: 'venueId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    skill?: IntFilter<"User"> | number
    onboardedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    userSports?: UserSportListRelationFilter
    availability?: AvailabilityListRelationFilter
    groupsAsCaptain?: GroupListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    messages?: MessageListRelationFilter
    votes?: VoteListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    skill?: SortOrder
    onboardedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userSports?: UserSportOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    groupsAsCaptain?: GroupOrderByRelationAggregateInput
    groupMembers?: GroupMemberOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    skill?: IntFilter<"User"> | number
    onboardedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    userSports?: UserSportListRelationFilter
    availability?: AvailabilityListRelationFilter
    groupsAsCaptain?: GroupListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    messages?: MessageListRelationFilter
    votes?: VoteListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    skill?: SortOrder
    onboardedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    skill?: IntWithAggregatesFilter<"User"> | number
    onboardedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SportWhereInput = {
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    id?: StringFilter<"Sport"> | string
    name?: StringFilter<"Sport"> | string
    minGroup?: IntFilter<"Sport"> | number
    maxGroup?: IntFilter<"Sport"> | number
    userSports?: UserSportListRelationFilter
    availability?: AvailabilityListRelationFilter
    groups?: GroupListRelationFilter
    venueSports?: VenueSportListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minGroup?: SortOrder
    maxGroup?: SortOrder
    userSports?: UserSportOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    venueSports?: VenueSportOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    minGroup?: IntFilter<"Sport"> | number
    maxGroup?: IntFilter<"Sport"> | number
    userSports?: UserSportListRelationFilter
    availability?: AvailabilityListRelationFilter
    groups?: GroupListRelationFilter
    venueSports?: VenueSportListRelationFilter
  }, "id" | "name">

  export type SportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    minGroup?: SortOrder
    maxGroup?: SortOrder
    _count?: SportCountOrderByAggregateInput
    _avg?: SportAvgOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
    _sum?: SportSumOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    OR?: SportScalarWhereWithAggregatesInput[]
    NOT?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sport"> | string
    name?: StringWithAggregatesFilter<"Sport"> | string
    minGroup?: IntWithAggregatesFilter<"Sport"> | number
    maxGroup?: IntWithAggregatesFilter<"Sport"> | number
  }

  export type UserSportWhereInput = {
    AND?: UserSportWhereInput | UserSportWhereInput[]
    OR?: UserSportWhereInput[]
    NOT?: UserSportWhereInput | UserSportWhereInput[]
    userId?: StringFilter<"UserSport"> | string
    sportId?: StringFilter<"UserSport"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }

  export type UserSportOrderByWithRelationInput = {
    userId?: SortOrder
    sportId?: SortOrder
    user?: UserOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
  }

  export type UserSportWhereUniqueInput = Prisma.AtLeast<{
    userId_sportId?: UserSportUserIdSportIdCompoundUniqueInput
    AND?: UserSportWhereInput | UserSportWhereInput[]
    OR?: UserSportWhereInput[]
    NOT?: UserSportWhereInput | UserSportWhereInput[]
    userId?: StringFilter<"UserSport"> | string
    sportId?: StringFilter<"UserSport"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }, "userId_sportId">

  export type UserSportOrderByWithAggregationInput = {
    userId?: SortOrder
    sportId?: SortOrder
    _count?: UserSportCountOrderByAggregateInput
    _max?: UserSportMaxOrderByAggregateInput
    _min?: UserSportMinOrderByAggregateInput
  }

  export type UserSportScalarWhereWithAggregatesInput = {
    AND?: UserSportScalarWhereWithAggregatesInput | UserSportScalarWhereWithAggregatesInput[]
    OR?: UserSportScalarWhereWithAggregatesInput[]
    NOT?: UserSportScalarWhereWithAggregatesInput | UserSportScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserSport"> | string
    sportId?: StringWithAggregatesFilter<"UserSport"> | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    date?: StringFilter<"Availability"> | string
    sportId?: StringFilter<"Availability"> | string
    status?: StringFilter<"Availability"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sportId?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date_sportId?: AvailabilityUserIdDateSportIdCompoundUniqueInput
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    userId?: StringFilter<"Availability"> | string
    date?: StringFilter<"Availability"> | string
    sportId?: StringFilter<"Availability"> | string
    status?: StringFilter<"Availability"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }, "id" | "userId_date_sportId">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sportId?: SortOrder
    status?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    userId?: StringWithAggregatesFilter<"Availability"> | string
    date?: StringWithAggregatesFilter<"Availability"> | string
    sportId?: StringWithAggregatesFilter<"Availability"> | string
    status?: StringWithAggregatesFilter<"Availability"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    sportId?: StringFilter<"Group"> | string
    date?: StringFilter<"Group"> | string
    captainId?: StringFilter<"Group"> | string
    status?: StringFilter<"Group"> | string
    shareCode?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    captain?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    messages?: MessageListRelationFilter
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    sportId?: SortOrder
    date?: SortOrder
    captainId?: SortOrder
    status?: SortOrder
    shareCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sport?: SportOrderByWithRelationInput
    captain?: UserOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareCode?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    sportId?: StringFilter<"Group"> | string
    date?: StringFilter<"Group"> | string
    captainId?: StringFilter<"Group"> | string
    status?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    captain?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    messages?: MessageListRelationFilter
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id" | "shareCode">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    sportId?: SortOrder
    date?: SortOrder
    captainId?: SortOrder
    status?: SortOrder
    shareCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    sportId?: StringWithAggregatesFilter<"Group"> | string
    date?: StringWithAggregatesFilter<"Group"> | string
    captainId?: StringWithAggregatesFilter<"Group"> | string
    status?: StringWithAggregatesFilter<"Group"> | string
    shareCode?: StringNullableWithAggregatesFilter<"Group"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    kind?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    kind?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    kind?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    confirmed?: BoolFilter<"GroupMember"> | boolean
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    confirmed?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    confirmed?: BoolFilter<"GroupMember"> | boolean
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    confirmed?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    confirmed?: BoolWithAggregatesFilter<"GroupMember"> | boolean
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    groupId?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    groupId?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    groupId?: StringWithAggregatesFilter<"Message"> | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    text?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    lat?: FloatFilter<"Venue"> | number
    lng?: FloatFilter<"Venue"> | number
    pricePerHour?: IntFilter<"Venue"> | number
    address?: StringFilter<"Venue"> | string
    venueSports?: VenueSportListRelationFilter
    events?: EventListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
    address?: SortOrder
    venueSports?: VenueSportOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    lat?: FloatFilter<"Venue"> | number
    lng?: FloatFilter<"Venue"> | number
    pricePerHour?: IntFilter<"Venue"> | number
    address?: StringFilter<"Venue"> | string
    venueSports?: VenueSportListRelationFilter
    events?: EventListRelationFilter
    votes?: VoteListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
    address?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    city?: StringWithAggregatesFilter<"Venue"> | string
    lat?: FloatWithAggregatesFilter<"Venue"> | number
    lng?: FloatWithAggregatesFilter<"Venue"> | number
    pricePerHour?: IntWithAggregatesFilter<"Venue"> | number
    address?: StringWithAggregatesFilter<"Venue"> | string
  }

  export type VenueSportWhereInput = {
    AND?: VenueSportWhereInput | VenueSportWhereInput[]
    OR?: VenueSportWhereInput[]
    NOT?: VenueSportWhereInput | VenueSportWhereInput[]
    venueId?: StringFilter<"VenueSport"> | string
    sportId?: StringFilter<"VenueSport"> | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }

  export type VenueSportOrderByWithRelationInput = {
    venueId?: SortOrder
    sportId?: SortOrder
    venue?: VenueOrderByWithRelationInput
    sport?: SportOrderByWithRelationInput
  }

  export type VenueSportWhereUniqueInput = Prisma.AtLeast<{
    venueId_sportId?: VenueSportVenueIdSportIdCompoundUniqueInput
    AND?: VenueSportWhereInput | VenueSportWhereInput[]
    OR?: VenueSportWhereInput[]
    NOT?: VenueSportWhereInput | VenueSportWhereInput[]
    venueId?: StringFilter<"VenueSport"> | string
    sportId?: StringFilter<"VenueSport"> | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
  }, "venueId_sportId">

  export type VenueSportOrderByWithAggregationInput = {
    venueId?: SortOrder
    sportId?: SortOrder
    _count?: VenueSportCountOrderByAggregateInput
    _max?: VenueSportMaxOrderByAggregateInput
    _min?: VenueSportMinOrderByAggregateInput
  }

  export type VenueSportScalarWhereWithAggregatesInput = {
    AND?: VenueSportScalarWhereWithAggregatesInput | VenueSportScalarWhereWithAggregatesInput[]
    OR?: VenueSportScalarWhereWithAggregatesInput[]
    NOT?: VenueSportScalarWhereWithAggregatesInput | VenueSportScalarWhereWithAggregatesInput[]
    venueId?: StringWithAggregatesFilter<"VenueSport"> | string
    sportId?: StringWithAggregatesFilter<"VenueSport"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    groupId?: StringFilter<"Event"> | string
    venueId?: StringFilter<"Event"> | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    weatherSummary?: StringNullableFilter<"Event"> | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    votes?: VoteListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    venueId?: SortOrder
    startsAt?: SortOrder
    weatherSummary?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    venueId?: StringFilter<"Event"> | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    weatherSummary?: StringNullableFilter<"Event"> | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    votes?: VoteListRelationFilter
  }, "id" | "groupId">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    venueId?: SortOrder
    startsAt?: SortOrder
    weatherSummary?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    groupId?: StringWithAggregatesFilter<"Event"> | string
    venueId?: StringWithAggregatesFilter<"Event"> | string
    startsAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    weatherSummary?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    eventId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    venueId?: StringFilter<"Vote"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_userId?: VoteEventIdUserIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    eventId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    venueId?: StringFilter<"Vote"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id" | "eventId_userId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    eventId?: StringWithAggregatesFilter<"Vote"> | string
    userId?: StringWithAggregatesFilter<"Vote"> | string
    venueId?: StringWithAggregatesFilter<"Vote"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportCreateInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportCreateNestedManyWithoutSportInput
    availability?: AvailabilityCreateNestedManyWithoutSportInput
    groups?: GroupCreateNestedManyWithoutSportInput
    venueSports?: VenueSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportUncheckedCreateNestedManyWithoutSportInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutSportInput
    groups?: GroupUncheckedCreateNestedManyWithoutSportInput
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUpdateManyWithoutSportNestedInput
    availability?: AvailabilityUpdateManyWithoutSportNestedInput
    groups?: GroupUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUncheckedUpdateManyWithoutSportNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutSportNestedInput
    groups?: GroupUncheckedUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
  }

  export type SportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
  }

  export type SportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
  }

  export type UserSportCreateInput = {
    user: UserCreateNestedOneWithoutUserSportsInput
    sport: SportCreateNestedOneWithoutUserSportsInput
  }

  export type UserSportUncheckedCreateInput = {
    userId: string
    sportId: string
  }

  export type UserSportUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserSportsNestedInput
    sport?: SportUpdateOneRequiredWithoutUserSportsNestedInput
  }

  export type UserSportUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSportCreateManyInput = {
    userId: string
    sportId: string
  }

  export type UserSportUpdateManyMutationInput = {

  }

  export type UserSportUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    date: string
    status: string
    user: UserCreateNestedOneWithoutAvailabilityInput
    sport: SportCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    userId: string
    date: string
    sportId: string
    status: string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
    sport?: SportUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    userId: string
    date: string
    sportId: string
    status: string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    sport: SportCreateNestedOneWithoutGroupsInput
    captain: UserCreateNestedOneWithoutGroupsAsCaptainInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: MessageCreateNestedManyWithoutGroupInput
    event?: EventCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    sportId: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
    event?: EventUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutGroupsNestedInput
    captain?: UserUpdateOneRequiredWithoutGroupsAsCaptainNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: MessageUpdateManyWithoutGroupNestedInput
    event?: EventUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
    event?: EventUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    sportId: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    kind: string
    title: string
    body: string
    link?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    kind: string
    title: string
    body: string
    link?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    kind: string
    title: string
    body: string
    link?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    confirmed?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    groupId: string
    userId: string
    confirmed?: boolean
  }

  export type GroupMemberUpdateInput = {
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberCreateManyInput = {
    groupId: string
    userId: string
    confirmed?: boolean
  }

  export type GroupMemberUpdateManyMutationInput = {
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    text: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    text: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    venueSports?: VenueSportCreateNestedManyWithoutVenueInput
    events?: EventCreateNestedManyWithoutVenueInput
    votes?: VoteCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutVenueInput
    events?: EventUncheckedCreateNestedManyWithoutVenueInput
    votes?: VoteUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    venueSports?: VenueSportUpdateManyWithoutVenueNestedInput
    events?: EventUpdateManyWithoutVenueNestedInput
    votes?: VoteUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    venueSports?: VenueSportUncheckedUpdateManyWithoutVenueNestedInput
    events?: EventUncheckedUpdateManyWithoutVenueNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type VenueSportCreateInput = {
    venue: VenueCreateNestedOneWithoutVenueSportsInput
    sport: SportCreateNestedOneWithoutVenueSportsInput
  }

  export type VenueSportUncheckedCreateInput = {
    venueId: string
    sportId: string
  }

  export type VenueSportUpdateInput = {
    venue?: VenueUpdateOneRequiredWithoutVenueSportsNestedInput
    sport?: SportUpdateOneRequiredWithoutVenueSportsNestedInput
  }

  export type VenueSportUncheckedUpdateInput = {
    venueId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type VenueSportCreateManyInput = {
    venueId: string
    sportId: string
  }

  export type VenueSportUpdateManyMutationInput = {

  }

  export type VenueSportUncheckedUpdateManyInput = {
    venueId?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    startsAt: Date | string
    weatherSummary?: string | null
    group: GroupCreateNestedOneWithoutEventInput
    venue: VenueCreateNestedOneWithoutEventsInput
    votes?: VoteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    groupId: string
    venueId: string
    startsAt: Date | string
    weatherSummary?: string | null
    votes?: VoteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    group?: GroupUpdateOneRequiredWithoutEventNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    votes?: VoteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: VoteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    groupId: string
    venueId: string
    startsAt: Date | string
    weatherSummary?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoteCreateInput = {
    id?: string
    event: EventCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutVotesInput
    venue: VenueCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    venueId: string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
    venue?: VenueUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    venueId: string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UserSportListRelationFilter = {
    every?: UserSportWhereInput
    some?: UserSportWhereInput
    none?: UserSportWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrder
    photoUrl?: SortOrder
    skill?: SortOrder
    onboardedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    skill?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrder
    photoUrl?: SortOrder
    skill?: SortOrder
    onboardedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrder
    photoUrl?: SortOrder
    skill?: SortOrder
    onboardedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    skill?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type VenueSportListRelationFilter = {
    every?: VenueSportWhereInput
    some?: VenueSportWhereInput
    none?: VenueSportWhereInput
  }

  export type VenueSportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minGroup?: SortOrder
    maxGroup?: SortOrder
  }

  export type SportAvgOrderByAggregateInput = {
    minGroup?: SortOrder
    maxGroup?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minGroup?: SortOrder
    maxGroup?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minGroup?: SortOrder
    maxGroup?: SortOrder
  }

  export type SportSumOrderByAggregateInput = {
    minGroup?: SortOrder
    maxGroup?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SportScalarRelationFilter = {
    is?: SportWhereInput
    isNot?: SportWhereInput
  }

  export type UserSportUserIdSportIdCompoundUniqueInput = {
    userId: string
    sportId: string
  }

  export type UserSportCountOrderByAggregateInput = {
    userId?: SortOrder
    sportId?: SortOrder
  }

  export type UserSportMaxOrderByAggregateInput = {
    userId?: SortOrder
    sportId?: SortOrder
  }

  export type UserSportMinOrderByAggregateInput = {
    userId?: SortOrder
    sportId?: SortOrder
  }

  export type AvailabilityUserIdDateSportIdCompoundUniqueInput = {
    userId: string
    date: string
    sportId: string
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sportId?: SortOrder
    status?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sportId?: SortOrder
    status?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sportId?: SortOrder
    status?: SortOrder
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
    date?: SortOrder
    captainId?: SortOrder
    status?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
    date?: SortOrder
    captainId?: SortOrder
    status?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
    date?: SortOrder
    captainId?: SortOrder
    status?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    confirmed?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    confirmed?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    confirmed?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
    address?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
    address?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
    address?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    pricePerHour?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type VenueSportVenueIdSportIdCompoundUniqueInput = {
    venueId: string
    sportId: string
  }

  export type VenueSportCountOrderByAggregateInput = {
    venueId?: SortOrder
    sportId?: SortOrder
  }

  export type VenueSportMaxOrderByAggregateInput = {
    venueId?: SortOrder
    sportId?: SortOrder
  }

  export type VenueSportMinOrderByAggregateInput = {
    venueId?: SortOrder
    sportId?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    venueId?: SortOrder
    startsAt?: SortOrder
    weatherSummary?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    venueId?: SortOrder
    startsAt?: SortOrder
    weatherSummary?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    venueId?: SortOrder
    startsAt?: SortOrder
    weatherSummary?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type VoteEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type UserSportCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutCaptainInput = {
    create?: XOR<GroupCreateWithoutCaptainInput, GroupUncheckedCreateWithoutCaptainInput> | GroupCreateWithoutCaptainInput[] | GroupUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCaptainInput | GroupCreateOrConnectWithoutCaptainInput[]
    createMany?: GroupCreateManyCaptainInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCaptainInput = {
    create?: XOR<GroupCreateWithoutCaptainInput, GroupUncheckedCreateWithoutCaptainInput> | GroupCreateWithoutCaptainInput[] | GroupUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCaptainInput | GroupCreateOrConnectWithoutCaptainInput[]
    createMany?: GroupCreateManyCaptainInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSportUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutUserInput | UserSportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutUserInput | UserSportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutUserInput | UserSportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutCaptainNestedInput = {
    create?: XOR<GroupCreateWithoutCaptainInput, GroupUncheckedCreateWithoutCaptainInput> | GroupCreateWithoutCaptainInput[] | GroupUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCaptainInput | GroupCreateOrConnectWithoutCaptainInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCaptainInput | GroupUpsertWithWhereUniqueWithoutCaptainInput[]
    createMany?: GroupCreateManyCaptainInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCaptainInput | GroupUpdateWithWhereUniqueWithoutCaptainInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCaptainInput | GroupUpdateManyWithWhereWithoutCaptainInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput> | UserSportCreateWithoutUserInput[] | UserSportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutUserInput | UserSportCreateOrConnectWithoutUserInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutUserInput | UserSportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportCreateManyUserInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutUserInput | UserSportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutUserInput | UserSportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCaptainNestedInput = {
    create?: XOR<GroupCreateWithoutCaptainInput, GroupUncheckedCreateWithoutCaptainInput> | GroupCreateWithoutCaptainInput[] | GroupUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCaptainInput | GroupCreateOrConnectWithoutCaptainInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCaptainInput | GroupUpsertWithWhereUniqueWithoutCaptainInput[]
    createMany?: GroupCreateManyCaptainInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCaptainInput | GroupUpdateWithWhereUniqueWithoutCaptainInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCaptainInput | GroupUpdateManyWithWhereWithoutCaptainInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserSportCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutSportInput = {
    create?: XOR<AvailabilityCreateWithoutSportInput, AvailabilityUncheckedCreateWithoutSportInput> | AvailabilityCreateWithoutSportInput[] | AvailabilityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSportInput | AvailabilityCreateOrConnectWithoutSportInput[]
    createMany?: AvailabilityCreateManySportInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutSportInput = {
    create?: XOR<GroupCreateWithoutSportInput, GroupUncheckedCreateWithoutSportInput> | GroupCreateWithoutSportInput[] | GroupUncheckedCreateWithoutSportInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSportInput | GroupCreateOrConnectWithoutSportInput[]
    createMany?: GroupCreateManySportInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type VenueSportCreateNestedManyWithoutSportInput = {
    create?: XOR<VenueSportCreateWithoutSportInput, VenueSportUncheckedCreateWithoutSportInput> | VenueSportCreateWithoutSportInput[] | VenueSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutSportInput | VenueSportCreateOrConnectWithoutSportInput[]
    createMany?: VenueSportCreateManySportInputEnvelope
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
  }

  export type UserSportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<AvailabilityCreateWithoutSportInput, AvailabilityUncheckedCreateWithoutSportInput> | AvailabilityCreateWithoutSportInput[] | AvailabilityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSportInput | AvailabilityCreateOrConnectWithoutSportInput[]
    createMany?: AvailabilityCreateManySportInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<GroupCreateWithoutSportInput, GroupUncheckedCreateWithoutSportInput> | GroupCreateWithoutSportInput[] | GroupUncheckedCreateWithoutSportInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSportInput | GroupCreateOrConnectWithoutSportInput[]
    createMany?: GroupCreateManySportInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type VenueSportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<VenueSportCreateWithoutSportInput, VenueSportUncheckedCreateWithoutSportInput> | VenueSportCreateWithoutSportInput[] | VenueSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutSportInput | VenueSportCreateOrConnectWithoutSportInput[]
    createMany?: VenueSportCreateManySportInputEnvelope
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
  }

  export type UserSportUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportInput | UserSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportInput | UserSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportInput | UserSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutSportNestedInput = {
    create?: XOR<AvailabilityCreateWithoutSportInput, AvailabilityUncheckedCreateWithoutSportInput> | AvailabilityCreateWithoutSportInput[] | AvailabilityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSportInput | AvailabilityCreateOrConnectWithoutSportInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutSportInput | AvailabilityUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: AvailabilityCreateManySportInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutSportInput | AvailabilityUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutSportInput | AvailabilityUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutSportNestedInput = {
    create?: XOR<GroupCreateWithoutSportInput, GroupUncheckedCreateWithoutSportInput> | GroupCreateWithoutSportInput[] | GroupUncheckedCreateWithoutSportInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSportInput | GroupCreateOrConnectWithoutSportInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutSportInput | GroupUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: GroupCreateManySportInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutSportInput | GroupUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutSportInput | GroupUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type VenueSportUpdateManyWithoutSportNestedInput = {
    create?: XOR<VenueSportCreateWithoutSportInput, VenueSportUncheckedCreateWithoutSportInput> | VenueSportCreateWithoutSportInput[] | VenueSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutSportInput | VenueSportCreateOrConnectWithoutSportInput[]
    upsert?: VenueSportUpsertWithWhereUniqueWithoutSportInput | VenueSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: VenueSportCreateManySportInputEnvelope
    set?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    disconnect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    delete?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    update?: VenueSportUpdateWithWhereUniqueWithoutSportInput | VenueSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: VenueSportUpdateManyWithWhereWithoutSportInput | VenueSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: VenueSportScalarWhereInput | VenueSportScalarWhereInput[]
  }

  export type UserSportUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput> | UserSportCreateWithoutSportInput[] | UserSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportCreateOrConnectWithoutSportInput | UserSportCreateOrConnectWithoutSportInput[]
    upsert?: UserSportUpsertWithWhereUniqueWithoutSportInput | UserSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportCreateManySportInputEnvelope
    set?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    disconnect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    delete?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    connect?: UserSportWhereUniqueInput | UserSportWhereUniqueInput[]
    update?: UserSportUpdateWithWhereUniqueWithoutSportInput | UserSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportUpdateManyWithWhereWithoutSportInput | UserSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<AvailabilityCreateWithoutSportInput, AvailabilityUncheckedCreateWithoutSportInput> | AvailabilityCreateWithoutSportInput[] | AvailabilityUncheckedCreateWithoutSportInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSportInput | AvailabilityCreateOrConnectWithoutSportInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutSportInput | AvailabilityUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: AvailabilityCreateManySportInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutSportInput | AvailabilityUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutSportInput | AvailabilityUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<GroupCreateWithoutSportInput, GroupUncheckedCreateWithoutSportInput> | GroupCreateWithoutSportInput[] | GroupUncheckedCreateWithoutSportInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSportInput | GroupCreateOrConnectWithoutSportInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutSportInput | GroupUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: GroupCreateManySportInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutSportInput | GroupUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutSportInput | GroupUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type VenueSportUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<VenueSportCreateWithoutSportInput, VenueSportUncheckedCreateWithoutSportInput> | VenueSportCreateWithoutSportInput[] | VenueSportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutSportInput | VenueSportCreateOrConnectWithoutSportInput[]
    upsert?: VenueSportUpsertWithWhereUniqueWithoutSportInput | VenueSportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: VenueSportCreateManySportInputEnvelope
    set?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    disconnect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    delete?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    update?: VenueSportUpdateWithWhereUniqueWithoutSportInput | VenueSportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: VenueSportUpdateManyWithWhereWithoutSportInput | VenueSportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: VenueSportScalarWhereInput | VenueSportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSportsInput = {
    create?: XOR<UserCreateWithoutUserSportsInput, UserUncheckedCreateWithoutUserSportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSportsInput
    connect?: UserWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutUserSportsInput = {
    create?: XOR<SportCreateWithoutUserSportsInput, SportUncheckedCreateWithoutUserSportsInput>
    connectOrCreate?: SportCreateOrConnectWithoutUserSportsInput
    connect?: SportWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSportsNestedInput = {
    create?: XOR<UserCreateWithoutUserSportsInput, UserUncheckedCreateWithoutUserSportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSportsInput
    upsert?: UserUpsertWithoutUserSportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSportsInput, UserUpdateWithoutUserSportsInput>, UserUncheckedUpdateWithoutUserSportsInput>
  }

  export type SportUpdateOneRequiredWithoutUserSportsNestedInput = {
    create?: XOR<SportCreateWithoutUserSportsInput, SportUncheckedCreateWithoutUserSportsInput>
    connectOrCreate?: SportCreateOrConnectWithoutUserSportsInput
    upsert?: SportUpsertWithoutUserSportsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutUserSportsInput, SportUpdateWithoutUserSportsInput>, SportUncheckedUpdateWithoutUserSportsInput>
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<SportCreateWithoutAvailabilityInput, SportUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: SportCreateOrConnectWithoutAvailabilityInput
    connect?: SportWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type SportUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<SportCreateWithoutAvailabilityInput, SportUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: SportCreateOrConnectWithoutAvailabilityInput
    upsert?: SportUpsertWithoutAvailabilityInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutAvailabilityInput, SportUpdateWithoutAvailabilityInput>, SportUncheckedUpdateWithoutAvailabilityInput>
  }

  export type SportCreateNestedOneWithoutGroupsInput = {
    create?: XOR<SportCreateWithoutGroupsInput, SportUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: SportCreateOrConnectWithoutGroupsInput
    connect?: SportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupsAsCaptainInput = {
    create?: XOR<UserCreateWithoutGroupsAsCaptainInput, UserUncheckedCreateWithoutGroupsAsCaptainInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsAsCaptainInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutGroupInput = {
    create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
    createMany?: MessageCreateManyGroupInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutGroupInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput
    connect?: EventWhereUniqueInput
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
    createMany?: MessageCreateManyGroupInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedOneWithoutGroupInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput
    connect?: EventWhereUniqueInput
  }

  export type SportUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<SportCreateWithoutGroupsInput, SportUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: SportCreateOrConnectWithoutGroupsInput
    upsert?: SportUpsertWithoutGroupsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutGroupsInput, SportUpdateWithoutGroupsInput>, SportUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateOneRequiredWithoutGroupsAsCaptainNestedInput = {
    create?: XOR<UserCreateWithoutGroupsAsCaptainInput, UserUncheckedCreateWithoutGroupsAsCaptainInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsAsCaptainInput
    upsert?: UserUpsertWithoutGroupsAsCaptainInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsAsCaptainInput, UserUpdateWithoutGroupsAsCaptainInput>, UserUncheckedUpdateWithoutGroupsAsCaptainInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutGroupInput | MessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MessageCreateManyGroupInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutGroupInput | MessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutGroupInput | MessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type EventUpdateOneWithoutGroupNestedInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput
    upsert?: EventUpsertWithoutGroupInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGroupInput, EventUpdateWithoutGroupInput>, EventUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutGroupInput | MessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MessageCreateManyGroupInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutGroupInput | MessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutGroupInput | MessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type EventUncheckedUpdateOneWithoutGroupNestedInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput
    upsert?: EventUpsertWithoutGroupInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGroupInput, EventUpdateWithoutGroupInput>, EventUncheckedUpdateWithoutGroupInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    upsert?: UserUpsertWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembersInput, UserUpdateWithoutGroupMembersInput>, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type GroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    upsert?: GroupUpsertWithoutMessagesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMessagesInput, GroupUpdateWithoutMessagesInput>, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type VenueSportCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueSportCreateWithoutVenueInput, VenueSportUncheckedCreateWithoutVenueInput> | VenueSportCreateWithoutVenueInput[] | VenueSportUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutVenueInput | VenueSportCreateOrConnectWithoutVenueInput[]
    createMany?: VenueSportCreateManyVenueInputEnvelope
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutVenueInput = {
    create?: XOR<VoteCreateWithoutVenueInput, VoteUncheckedCreateWithoutVenueInput> | VoteCreateWithoutVenueInput[] | VoteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVenueInput | VoteCreateOrConnectWithoutVenueInput[]
    createMany?: VoteCreateManyVenueInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VenueSportUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueSportCreateWithoutVenueInput, VenueSportUncheckedCreateWithoutVenueInput> | VenueSportCreateWithoutVenueInput[] | VenueSportUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutVenueInput | VenueSportCreateOrConnectWithoutVenueInput[]
    createMany?: VenueSportCreateManyVenueInputEnvelope
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<VoteCreateWithoutVenueInput, VoteUncheckedCreateWithoutVenueInput> | VoteCreateWithoutVenueInput[] | VoteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVenueInput | VoteCreateOrConnectWithoutVenueInput[]
    createMany?: VoteCreateManyVenueInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VenueSportUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueSportCreateWithoutVenueInput, VenueSportUncheckedCreateWithoutVenueInput> | VenueSportCreateWithoutVenueInput[] | VenueSportUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutVenueInput | VenueSportCreateOrConnectWithoutVenueInput[]
    upsert?: VenueSportUpsertWithWhereUniqueWithoutVenueInput | VenueSportUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueSportCreateManyVenueInputEnvelope
    set?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    disconnect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    delete?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    update?: VenueSportUpdateWithWhereUniqueWithoutVenueInput | VenueSportUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueSportUpdateManyWithWhereWithoutVenueInput | VenueSportUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueSportScalarWhereInput | VenueSportScalarWhereInput[]
  }

  export type EventUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VoteCreateWithoutVenueInput, VoteUncheckedCreateWithoutVenueInput> | VoteCreateWithoutVenueInput[] | VoteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVenueInput | VoteCreateOrConnectWithoutVenueInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVenueInput | VoteUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VoteCreateManyVenueInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVenueInput | VoteUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVenueInput | VoteUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VenueSportUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueSportCreateWithoutVenueInput, VenueSportUncheckedCreateWithoutVenueInput> | VenueSportCreateWithoutVenueInput[] | VenueSportUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueSportCreateOrConnectWithoutVenueInput | VenueSportCreateOrConnectWithoutVenueInput[]
    upsert?: VenueSportUpsertWithWhereUniqueWithoutVenueInput | VenueSportUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueSportCreateManyVenueInputEnvelope
    set?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    disconnect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    delete?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    connect?: VenueSportWhereUniqueInput | VenueSportWhereUniqueInput[]
    update?: VenueSportUpdateWithWhereUniqueWithoutVenueInput | VenueSportUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueSportUpdateManyWithWhereWithoutVenueInput | VenueSportUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueSportScalarWhereInput | VenueSportScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VoteCreateWithoutVenueInput, VoteUncheckedCreateWithoutVenueInput> | VoteCreateWithoutVenueInput[] | VoteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVenueInput | VoteCreateOrConnectWithoutVenueInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVenueInput | VoteUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VoteCreateManyVenueInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVenueInput | VoteUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVenueInput | VoteUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutVenueSportsInput = {
    create?: XOR<VenueCreateWithoutVenueSportsInput, VenueUncheckedCreateWithoutVenueSportsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutVenueSportsInput
    connect?: VenueWhereUniqueInput
  }

  export type SportCreateNestedOneWithoutVenueSportsInput = {
    create?: XOR<SportCreateWithoutVenueSportsInput, SportUncheckedCreateWithoutVenueSportsInput>
    connectOrCreate?: SportCreateOrConnectWithoutVenueSportsInput
    connect?: SportWhereUniqueInput
  }

  export type VenueUpdateOneRequiredWithoutVenueSportsNestedInput = {
    create?: XOR<VenueCreateWithoutVenueSportsInput, VenueUncheckedCreateWithoutVenueSportsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutVenueSportsInput
    upsert?: VenueUpsertWithoutVenueSportsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutVenueSportsInput, VenueUpdateWithoutVenueSportsInput>, VenueUncheckedUpdateWithoutVenueSportsInput>
  }

  export type SportUpdateOneRequiredWithoutVenueSportsNestedInput = {
    create?: XOR<SportCreateWithoutVenueSportsInput, SportUncheckedCreateWithoutVenueSportsInput>
    connectOrCreate?: SportCreateOrConnectWithoutVenueSportsInput
    upsert?: SportUpsertWithoutVenueSportsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutVenueSportsInput, SportUpdateWithoutVenueSportsInput>, SportUncheckedUpdateWithoutVenueSportsInput>
  }

  export type GroupCreateNestedOneWithoutEventInput = {
    create?: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEventInput
    connect?: GroupWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutEventsInput = {
    create?: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventsInput
    connect?: VenueWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutEventInput = {
    create?: XOR<VoteCreateWithoutEventInput, VoteUncheckedCreateWithoutEventInput> | VoteCreateWithoutEventInput[] | VoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutEventInput | VoteCreateOrConnectWithoutEventInput[]
    createMany?: VoteCreateManyEventInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VoteCreateWithoutEventInput, VoteUncheckedCreateWithoutEventInput> | VoteCreateWithoutEventInput[] | VoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutEventInput | VoteCreateOrConnectWithoutEventInput[]
    createMany?: VoteCreateManyEventInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEventInput
    upsert?: GroupUpsertWithoutEventInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutEventInput, GroupUpdateWithoutEventInput>, GroupUncheckedUpdateWithoutEventInput>
  }

  export type VenueUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventsInput
    upsert?: VenueUpsertWithoutEventsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutEventsInput, VenueUpdateWithoutEventsInput>, VenueUncheckedUpdateWithoutEventsInput>
  }

  export type VoteUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoteCreateWithoutEventInput, VoteUncheckedCreateWithoutEventInput> | VoteCreateWithoutEventInput[] | VoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutEventInput | VoteCreateOrConnectWithoutEventInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutEventInput | VoteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoteCreateManyEventInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutEventInput | VoteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutEventInput | VoteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoteCreateWithoutEventInput, VoteUncheckedCreateWithoutEventInput> | VoteCreateWithoutEventInput[] | VoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutEventInput | VoteCreateOrConnectWithoutEventInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutEventInput | VoteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoteCreateManyEventInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutEventInput | VoteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutEventInput | VoteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutVotesInput = {
    create?: XOR<EventCreateWithoutVotesInput, EventUncheckedCreateWithoutVotesInput>
    connectOrCreate?: EventCreateOrConnectWithoutVotesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutVotesInput = {
    create?: XOR<VenueCreateWithoutVotesInput, VenueUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutVotesInput
    connect?: VenueWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<EventCreateWithoutVotesInput, EventUncheckedCreateWithoutVotesInput>
    connectOrCreate?: EventCreateOrConnectWithoutVotesInput
    upsert?: EventUpsertWithoutVotesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVotesInput, EventUpdateWithoutVotesInput>, EventUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type VenueUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<VenueCreateWithoutVotesInput, VenueUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutVotesInput
    upsert?: VenueUpsertWithoutVotesInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutVotesInput, VenueUpdateWithoutVotesInput>, VenueUncheckedUpdateWithoutVotesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserSportCreateWithoutUserInput = {
    sport: SportCreateNestedOneWithoutUserSportsInput
  }

  export type UserSportUncheckedCreateWithoutUserInput = {
    sportId: string
  }

  export type UserSportCreateOrConnectWithoutUserInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput>
  }

  export type UserSportCreateManyUserInputEnvelope = {
    data: UserSportCreateManyUserInput | UserSportCreateManyUserInput[]
  }

  export type AvailabilityCreateWithoutUserInput = {
    id?: string
    date: string
    status: string
    sport: SportCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateWithoutUserInput = {
    id?: string
    date: string
    sportId: string
    status: string
  }

  export type AvailabilityCreateOrConnectWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityCreateManyUserInputEnvelope = {
    data: AvailabilityCreateManyUserInput | AvailabilityCreateManyUserInput[]
  }

  export type GroupCreateWithoutCaptainInput = {
    id?: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    sport: SportCreateNestedOneWithoutGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: MessageCreateNestedManyWithoutGroupInput
    event?: EventCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCaptainInput = {
    id?: string
    sportId: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
    event?: EventUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCaptainInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCaptainInput, GroupUncheckedCreateWithoutCaptainInput>
  }

  export type GroupCreateManyCaptainInputEnvelope = {
    data: GroupCreateManyCaptainInput | GroupCreateManyCaptainInput[]
  }

  export type GroupMemberCreateWithoutUserInput = {
    confirmed?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    groupId: string
    confirmed?: boolean
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    text: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
  }

  export type VoteCreateWithoutUserInput = {
    id?: string
    event: EventCreateNestedOneWithoutVotesInput
    venue: VenueCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    venueId: string
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    kind: string
    title: string
    body: string
    link?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    kind: string
    title: string
    body: string
    link?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type UserSportUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutUserInput, UserSportUncheckedUpdateWithoutUserInput>
    create: XOR<UserSportCreateWithoutUserInput, UserSportUncheckedCreateWithoutUserInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutUserInput, UserSportUncheckedUpdateWithoutUserInput>
  }

  export type UserSportUpdateManyWithWhereWithoutUserInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSportScalarWhereInput = {
    AND?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
    OR?: UserSportScalarWhereInput[]
    NOT?: UserSportScalarWhereInput | UserSportScalarWhereInput[]
    userId?: StringFilter<"UserSport"> | string
    sportId?: StringFilter<"UserSport"> | string
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    date?: StringFilter<"Availability"> | string
    sportId?: StringFilter<"Availability"> | string
    status?: StringFilter<"Availability"> | string
  }

  export type GroupUpsertWithWhereUniqueWithoutCaptainInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCaptainInput, GroupUncheckedUpdateWithoutCaptainInput>
    create: XOR<GroupCreateWithoutCaptainInput, GroupUncheckedCreateWithoutCaptainInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCaptainInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCaptainInput, GroupUncheckedUpdateWithoutCaptainInput>
  }

  export type GroupUpdateManyWithWhereWithoutCaptainInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCaptainInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    sportId?: StringFilter<"Group"> | string
    date?: StringFilter<"Group"> | string
    captainId?: StringFilter<"Group"> | string
    status?: StringFilter<"Group"> | string
    shareCode?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    confirmed?: BoolFilter<"GroupMember"> | boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    groupId?: StringFilter<"Message"> | string
    userId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    eventId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    venueId?: StringFilter<"Vote"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    kind?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserSportCreateWithoutSportInput = {
    user: UserCreateNestedOneWithoutUserSportsInput
  }

  export type UserSportUncheckedCreateWithoutSportInput = {
    userId: string
  }

  export type UserSportCreateOrConnectWithoutSportInput = {
    where: UserSportWhereUniqueInput
    create: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput>
  }

  export type UserSportCreateManySportInputEnvelope = {
    data: UserSportCreateManySportInput | UserSportCreateManySportInput[]
  }

  export type AvailabilityCreateWithoutSportInput = {
    id?: string
    date: string
    status: string
    user: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateWithoutSportInput = {
    id?: string
    userId: string
    date: string
    status: string
  }

  export type AvailabilityCreateOrConnectWithoutSportInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutSportInput, AvailabilityUncheckedCreateWithoutSportInput>
  }

  export type AvailabilityCreateManySportInputEnvelope = {
    data: AvailabilityCreateManySportInput | AvailabilityCreateManySportInput[]
  }

  export type GroupCreateWithoutSportInput = {
    id?: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    captain: UserCreateNestedOneWithoutGroupsAsCaptainInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: MessageCreateNestedManyWithoutGroupInput
    event?: EventCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutSportInput = {
    id?: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
    event?: EventUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutSportInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutSportInput, GroupUncheckedCreateWithoutSportInput>
  }

  export type GroupCreateManySportInputEnvelope = {
    data: GroupCreateManySportInput | GroupCreateManySportInput[]
  }

  export type VenueSportCreateWithoutSportInput = {
    venue: VenueCreateNestedOneWithoutVenueSportsInput
  }

  export type VenueSportUncheckedCreateWithoutSportInput = {
    venueId: string
  }

  export type VenueSportCreateOrConnectWithoutSportInput = {
    where: VenueSportWhereUniqueInput
    create: XOR<VenueSportCreateWithoutSportInput, VenueSportUncheckedCreateWithoutSportInput>
  }

  export type VenueSportCreateManySportInputEnvelope = {
    data: VenueSportCreateManySportInput | VenueSportCreateManySportInput[]
  }

  export type UserSportUpsertWithWhereUniqueWithoutSportInput = {
    where: UserSportWhereUniqueInput
    update: XOR<UserSportUpdateWithoutSportInput, UserSportUncheckedUpdateWithoutSportInput>
    create: XOR<UserSportCreateWithoutSportInput, UserSportUncheckedCreateWithoutSportInput>
  }

  export type UserSportUpdateWithWhereUniqueWithoutSportInput = {
    where: UserSportWhereUniqueInput
    data: XOR<UserSportUpdateWithoutSportInput, UserSportUncheckedUpdateWithoutSportInput>
  }

  export type UserSportUpdateManyWithWhereWithoutSportInput = {
    where: UserSportScalarWhereInput
    data: XOR<UserSportUpdateManyMutationInput, UserSportUncheckedUpdateManyWithoutSportInput>
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutSportInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutSportInput, AvailabilityUncheckedUpdateWithoutSportInput>
    create: XOR<AvailabilityCreateWithoutSportInput, AvailabilityUncheckedCreateWithoutSportInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutSportInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutSportInput, AvailabilityUncheckedUpdateWithoutSportInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutSportInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutSportInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutSportInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutSportInput, GroupUncheckedUpdateWithoutSportInput>
    create: XOR<GroupCreateWithoutSportInput, GroupUncheckedCreateWithoutSportInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutSportInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutSportInput, GroupUncheckedUpdateWithoutSportInput>
  }

  export type GroupUpdateManyWithWhereWithoutSportInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutSportInput>
  }

  export type VenueSportUpsertWithWhereUniqueWithoutSportInput = {
    where: VenueSportWhereUniqueInput
    update: XOR<VenueSportUpdateWithoutSportInput, VenueSportUncheckedUpdateWithoutSportInput>
    create: XOR<VenueSportCreateWithoutSportInput, VenueSportUncheckedCreateWithoutSportInput>
  }

  export type VenueSportUpdateWithWhereUniqueWithoutSportInput = {
    where: VenueSportWhereUniqueInput
    data: XOR<VenueSportUpdateWithoutSportInput, VenueSportUncheckedUpdateWithoutSportInput>
  }

  export type VenueSportUpdateManyWithWhereWithoutSportInput = {
    where: VenueSportScalarWhereInput
    data: XOR<VenueSportUpdateManyMutationInput, VenueSportUncheckedUpdateManyWithoutSportInput>
  }

  export type VenueSportScalarWhereInput = {
    AND?: VenueSportScalarWhereInput | VenueSportScalarWhereInput[]
    OR?: VenueSportScalarWhereInput[]
    NOT?: VenueSportScalarWhereInput | VenueSportScalarWhereInput[]
    venueId?: StringFilter<"VenueSport"> | string
    sportId?: StringFilter<"VenueSport"> | string
  }

  export type UserCreateWithoutUserSportsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSportsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSportsInput, UserUncheckedCreateWithoutUserSportsInput>
  }

  export type SportCreateWithoutUserSportsInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    availability?: AvailabilityCreateNestedManyWithoutSportInput
    groups?: GroupCreateNestedManyWithoutSportInput
    venueSports?: VenueSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutUserSportsInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    availability?: AvailabilityUncheckedCreateNestedManyWithoutSportInput
    groups?: GroupUncheckedCreateNestedManyWithoutSportInput
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutUserSportsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutUserSportsInput, SportUncheckedCreateWithoutUserSportsInput>
  }

  export type UserUpsertWithoutUserSportsInput = {
    update: XOR<UserUpdateWithoutUserSportsInput, UserUncheckedUpdateWithoutUserSportsInput>
    create: XOR<UserCreateWithoutUserSportsInput, UserUncheckedCreateWithoutUserSportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSportsInput, UserUncheckedUpdateWithoutUserSportsInput>
  }

  export type UserUpdateWithoutUserSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SportUpsertWithoutUserSportsInput = {
    update: XOR<SportUpdateWithoutUserSportsInput, SportUncheckedUpdateWithoutUserSportsInput>
    create: XOR<SportCreateWithoutUserSportsInput, SportUncheckedCreateWithoutUserSportsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutUserSportsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutUserSportsInput, SportUncheckedUpdateWithoutUserSportsInput>
  }

  export type SportUpdateWithoutUserSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    availability?: AvailabilityUpdateManyWithoutSportNestedInput
    groups?: GroupUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutUserSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    availability?: AvailabilityUncheckedUpdateManyWithoutSportNestedInput
    groups?: GroupUncheckedUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type UserCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type SportCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportCreateNestedManyWithoutSportInput
    groups?: GroupCreateNestedManyWithoutSportInput
    venueSports?: VenueSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportUncheckedCreateNestedManyWithoutSportInput
    groups?: GroupUncheckedCreateNestedManyWithoutSportInput
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutAvailabilityInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutAvailabilityInput, SportUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SportUpsertWithoutAvailabilityInput = {
    update: XOR<SportUpdateWithoutAvailabilityInput, SportUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<SportCreateWithoutAvailabilityInput, SportUncheckedCreateWithoutAvailabilityInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutAvailabilityInput, SportUncheckedUpdateWithoutAvailabilityInput>
  }

  export type SportUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUpdateManyWithoutSportNestedInput
    groups?: GroupUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUncheckedUpdateManyWithoutSportNestedInput
    groups?: GroupUncheckedUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateWithoutGroupsInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportCreateNestedManyWithoutSportInput
    availability?: AvailabilityCreateNestedManyWithoutSportInput
    venueSports?: VenueSportCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportUncheckedCreateNestedManyWithoutSportInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutSportInput
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutGroupsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutGroupsInput, SportUncheckedCreateWithoutGroupsInput>
  }

  export type UserCreateWithoutGroupsAsCaptainInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsAsCaptainInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsAsCaptainInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsAsCaptainInput, UserUncheckedCreateWithoutGroupsAsCaptainInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    confirmed?: boolean
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    userId: string
    confirmed?: boolean
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
  }

  export type MessageCreateWithoutGroupInput = {
    id?: string
    text: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    text: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutGroupInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput>
  }

  export type MessageCreateManyGroupInputEnvelope = {
    data: MessageCreateManyGroupInput | MessageCreateManyGroupInput[]
  }

  export type EventCreateWithoutGroupInput = {
    id?: string
    startsAt: Date | string
    weatherSummary?: string | null
    venue: VenueCreateNestedOneWithoutEventsInput
    votes?: VoteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutGroupInput = {
    id?: string
    venueId: string
    startsAt: Date | string
    weatherSummary?: string | null
    votes?: VoteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutGroupInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
  }

  export type SportUpsertWithoutGroupsInput = {
    update: XOR<SportUpdateWithoutGroupsInput, SportUncheckedUpdateWithoutGroupsInput>
    create: XOR<SportCreateWithoutGroupsInput, SportUncheckedCreateWithoutGroupsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutGroupsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutGroupsInput, SportUncheckedUpdateWithoutGroupsInput>
  }

  export type SportUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUpdateManyWithoutSportNestedInput
    availability?: AvailabilityUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUncheckedUpdateManyWithoutSportNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutSportNestedInput
    venueSports?: VenueSportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type UserUpsertWithoutGroupsAsCaptainInput = {
    update: XOR<UserUpdateWithoutGroupsAsCaptainInput, UserUncheckedUpdateWithoutGroupsAsCaptainInput>
    create: XOR<UserCreateWithoutGroupsAsCaptainInput, UserUncheckedCreateWithoutGroupsAsCaptainInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsAsCaptainInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsAsCaptainInput, UserUncheckedUpdateWithoutGroupsAsCaptainInput>
  }

  export type UserUpdateWithoutGroupsAsCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsAsCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutGroupInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutGroupInput, MessageUncheckedUpdateWithoutGroupInput>
    create: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutGroupInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutGroupInput, MessageUncheckedUpdateWithoutGroupInput>
  }

  export type MessageUpdateManyWithWhereWithoutGroupInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutGroupInput>
  }

  export type EventUpsertWithoutGroupInput = {
    update: XOR<EventUpdateWithoutGroupInput, EventUncheckedUpdateWithoutGroupInput>
    create: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutGroupInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutGroupInput, EventUncheckedUpdateWithoutGroupInput>
  }

  export type EventUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    votes?: VoteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: VoteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    sport: SportCreateNestedOneWithoutGroupsInput
    captain: UserCreateNestedOneWithoutGroupsAsCaptainInput
    messages?: MessageCreateNestedManyWithoutGroupInput
    event?: EventCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    sportId: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
    event?: EventUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupMembersInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    messages?: MessageCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupMembersInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutGroupsNestedInput
    captain?: UserUpdateOneRequiredWithoutGroupsAsCaptainNestedInput
    messages?: MessageUpdateManyWithoutGroupNestedInput
    event?: EventUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
    event?: EventUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMembersInput = {
    update: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UserUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateWithoutMessagesInput = {
    id?: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    sport: SportCreateNestedOneWithoutGroupsInput
    captain: UserCreateNestedOneWithoutGroupsAsCaptainInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    event?: EventCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMessagesInput = {
    id?: string
    sportId: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    event?: EventUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMessagesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type GroupUpsertWithoutMessagesInput = {
    update: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type GroupUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutGroupsNestedInput
    captain?: UserUpdateOneRequiredWithoutGroupsAsCaptainNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    event?: EventUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    event?: EventUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VenueSportCreateWithoutVenueInput = {
    sport: SportCreateNestedOneWithoutVenueSportsInput
  }

  export type VenueSportUncheckedCreateWithoutVenueInput = {
    sportId: string
  }

  export type VenueSportCreateOrConnectWithoutVenueInput = {
    where: VenueSportWhereUniqueInput
    create: XOR<VenueSportCreateWithoutVenueInput, VenueSportUncheckedCreateWithoutVenueInput>
  }

  export type VenueSportCreateManyVenueInputEnvelope = {
    data: VenueSportCreateManyVenueInput | VenueSportCreateManyVenueInput[]
  }

  export type EventCreateWithoutVenueInput = {
    id?: string
    startsAt: Date | string
    weatherSummary?: string | null
    group: GroupCreateNestedOneWithoutEventInput
    votes?: VoteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVenueInput = {
    id?: string
    groupId: string
    startsAt: Date | string
    weatherSummary?: string | null
    votes?: VoteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVenueInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventCreateManyVenueInputEnvelope = {
    data: EventCreateManyVenueInput | EventCreateManyVenueInput[]
  }

  export type VoteCreateWithoutVenueInput = {
    id?: string
    event: EventCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutVenueInput = {
    id?: string
    eventId: string
    userId: string
  }

  export type VoteCreateOrConnectWithoutVenueInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVenueInput, VoteUncheckedCreateWithoutVenueInput>
  }

  export type VoteCreateManyVenueInputEnvelope = {
    data: VoteCreateManyVenueInput | VoteCreateManyVenueInput[]
  }

  export type VenueSportUpsertWithWhereUniqueWithoutVenueInput = {
    where: VenueSportWhereUniqueInput
    update: XOR<VenueSportUpdateWithoutVenueInput, VenueSportUncheckedUpdateWithoutVenueInput>
    create: XOR<VenueSportCreateWithoutVenueInput, VenueSportUncheckedCreateWithoutVenueInput>
  }

  export type VenueSportUpdateWithWhereUniqueWithoutVenueInput = {
    where: VenueSportWhereUniqueInput
    data: XOR<VenueSportUpdateWithoutVenueInput, VenueSportUncheckedUpdateWithoutVenueInput>
  }

  export type VenueSportUpdateManyWithWhereWithoutVenueInput = {
    where: VenueSportScalarWhereInput
    data: XOR<VenueSportUpdateManyMutationInput, VenueSportUncheckedUpdateManyWithoutVenueInput>
  }

  export type EventUpsertWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventUpdateWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
  }

  export type EventUpdateManyWithWhereWithoutVenueInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutVenueInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    groupId?: StringFilter<"Event"> | string
    venueId?: StringFilter<"Event"> | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    weatherSummary?: StringNullableFilter<"Event"> | string | null
  }

  export type VoteUpsertWithWhereUniqueWithoutVenueInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVenueInput, VoteUncheckedUpdateWithoutVenueInput>
    create: XOR<VoteCreateWithoutVenueInput, VoteUncheckedCreateWithoutVenueInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVenueInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVenueInput, VoteUncheckedUpdateWithoutVenueInput>
  }

  export type VoteUpdateManyWithWhereWithoutVenueInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenueCreateWithoutVenueSportsInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    events?: EventCreateNestedManyWithoutVenueInput
    votes?: VoteCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutVenueSportsInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    events?: EventUncheckedCreateNestedManyWithoutVenueInput
    votes?: VoteUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutVenueSportsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutVenueSportsInput, VenueUncheckedCreateWithoutVenueSportsInput>
  }

  export type SportCreateWithoutVenueSportsInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportCreateNestedManyWithoutSportInput
    availability?: AvailabilityCreateNestedManyWithoutSportInput
    groups?: GroupCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutVenueSportsInput = {
    id?: string
    name: string
    minGroup: number
    maxGroup: number
    userSports?: UserSportUncheckedCreateNestedManyWithoutSportInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutSportInput
    groups?: GroupUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutVenueSportsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutVenueSportsInput, SportUncheckedCreateWithoutVenueSportsInput>
  }

  export type VenueUpsertWithoutVenueSportsInput = {
    update: XOR<VenueUpdateWithoutVenueSportsInput, VenueUncheckedUpdateWithoutVenueSportsInput>
    create: XOR<VenueCreateWithoutVenueSportsInput, VenueUncheckedCreateWithoutVenueSportsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutVenueSportsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutVenueSportsInput, VenueUncheckedUpdateWithoutVenueSportsInput>
  }

  export type VenueUpdateWithoutVenueSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutVenueNestedInput
    votes?: VoteUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutVenueSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutVenueNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type SportUpsertWithoutVenueSportsInput = {
    update: XOR<SportUpdateWithoutVenueSportsInput, SportUncheckedUpdateWithoutVenueSportsInput>
    create: XOR<SportCreateWithoutVenueSportsInput, SportUncheckedCreateWithoutVenueSportsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutVenueSportsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutVenueSportsInput, SportUncheckedUpdateWithoutVenueSportsInput>
  }

  export type SportUpdateWithoutVenueSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUpdateManyWithoutSportNestedInput
    availability?: AvailabilityUpdateManyWithoutSportNestedInput
    groups?: GroupUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutVenueSportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minGroup?: IntFieldUpdateOperationsInput | number
    maxGroup?: IntFieldUpdateOperationsInput | number
    userSports?: UserSportUncheckedUpdateManyWithoutSportNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutSportNestedInput
    groups?: GroupUncheckedUpdateManyWithoutSportNestedInput
  }

  export type GroupCreateWithoutEventInput = {
    id?: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    sport: SportCreateNestedOneWithoutGroupsInput
    captain: UserCreateNestedOneWithoutGroupsAsCaptainInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: MessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutEventInput = {
    id?: string
    sportId: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutEventInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput>
  }

  export type VenueCreateWithoutEventsInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    venueSports?: VenueSportCreateNestedManyWithoutVenueInput
    votes?: VoteCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutVenueInput
    votes?: VoteUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutEventsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
  }

  export type VoteCreateWithoutEventInput = {
    id?: string
    user: UserCreateNestedOneWithoutVotesInput
    venue: VenueCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    venueId: string
  }

  export type VoteCreateOrConnectWithoutEventInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutEventInput, VoteUncheckedCreateWithoutEventInput>
  }

  export type VoteCreateManyEventInputEnvelope = {
    data: VoteCreateManyEventInput | VoteCreateManyEventInput[]
  }

  export type GroupUpsertWithoutEventInput = {
    update: XOR<GroupUpdateWithoutEventInput, GroupUncheckedUpdateWithoutEventInput>
    create: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutEventInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutEventInput, GroupUncheckedUpdateWithoutEventInput>
  }

  export type GroupUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutGroupsNestedInput
    captain?: UserUpdateOneRequiredWithoutGroupsAsCaptainNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: MessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type VenueUpsertWithoutEventsInput = {
    update: XOR<VenueUpdateWithoutEventsInput, VenueUncheckedUpdateWithoutEventsInput>
    create: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutEventsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutEventsInput, VenueUncheckedUpdateWithoutEventsInput>
  }

  export type VenueUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    venueSports?: VenueSportUpdateManyWithoutVenueNestedInput
    votes?: VoteUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    venueSports?: VenueSportUncheckedUpdateManyWithoutVenueNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutEventInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutEventInput, VoteUncheckedUpdateWithoutEventInput>
    create: XOR<VoteCreateWithoutEventInput, VoteUncheckedCreateWithoutEventInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutEventInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutEventInput, VoteUncheckedUpdateWithoutEventInput>
  }

  export type VoteUpdateManyWithWhereWithoutEventInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutVotesInput = {
    id?: string
    startsAt: Date | string
    weatherSummary?: string | null
    group: GroupCreateNestedOneWithoutEventInput
    venue: VenueCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutVotesInput = {
    id?: string
    groupId: string
    venueId: string
    startsAt: Date | string
    weatherSummary?: string | null
  }

  export type EventCreateOrConnectWithoutVotesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVotesInput, EventUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    bio?: string | null
    photoUrl?: string | null
    skill?: number
    onboardedAt?: Date | string | null
    createdAt?: Date | string
    userSports?: UserSportUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    groupsAsCaptain?: GroupUncheckedCreateNestedManyWithoutCaptainInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type VenueCreateWithoutVotesInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    venueSports?: VenueSportCreateNestedManyWithoutVenueInput
    events?: EventCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    city?: string
    lat: number
    lng: number
    pricePerHour: number
    address: string
    venueSports?: VenueSportUncheckedCreateNestedManyWithoutVenueInput
    events?: EventUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutVotesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutVotesInput, VenueUncheckedCreateWithoutVotesInput>
  }

  export type EventUpsertWithoutVotesInput = {
    update: XOR<EventUpdateWithoutVotesInput, EventUncheckedUpdateWithoutVotesInput>
    create: XOR<EventCreateWithoutVotesInput, EventUncheckedCreateWithoutVotesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVotesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVotesInput, EventUncheckedUpdateWithoutVotesInput>
  }

  export type EventUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    group?: GroupUpdateOneRequiredWithoutEventNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: IntFieldUpdateOperationsInput | number
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSports?: UserSportUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    groupsAsCaptain?: GroupUncheckedUpdateManyWithoutCaptainNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VenueUpsertWithoutVotesInput = {
    update: XOR<VenueUpdateWithoutVotesInput, VenueUncheckedUpdateWithoutVotesInput>
    create: XOR<VenueCreateWithoutVotesInput, VenueUncheckedCreateWithoutVotesInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutVotesInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutVotesInput, VenueUncheckedUpdateWithoutVotesInput>
  }

  export type VenueUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    venueSports?: VenueSportUpdateManyWithoutVenueNestedInput
    events?: EventUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    pricePerHour?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    venueSports?: VenueSportUncheckedUpdateManyWithoutVenueNestedInput
    events?: EventUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type UserSportCreateManyUserInput = {
    sportId: string
  }

  export type AvailabilityCreateManyUserInput = {
    id?: string
    date: string
    sportId: string
    status: string
  }

  export type GroupCreateManyCaptainInput = {
    id?: string
    sportId: string
    date: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    groupId: string
    confirmed?: boolean
  }

  export type MessageCreateManyUserInput = {
    id?: string
    groupId: string
    text: string
    createdAt?: Date | string
  }

  export type VoteCreateManyUserInput = {
    id?: string
    eventId: string
    venueId: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    kind: string
    title: string
    body: string
    link?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserSportUpdateWithoutUserInput = {
    sport?: SportUpdateOneRequiredWithoutUserSportsNestedInput
  }

  export type UserSportUncheckedUpdateWithoutUserInput = {
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSportUncheckedUpdateManyWithoutUserInput = {
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sport?: SportUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUpdateWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: MessageUpdateManyWithoutGroupNestedInput
    event?: EventUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
    event?: EventUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutVotesNestedInput
    venue?: VenueUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportCreateManySportInput = {
    userId: string
  }

  export type AvailabilityCreateManySportInput = {
    id?: string
    userId: string
    date: string
    status: string
  }

  export type GroupCreateManySportInput = {
    id?: string
    date: string
    captainId: string
    status?: string
    shareCode?: string | null
    createdAt?: Date | string
  }

  export type VenueSportCreateManySportInput = {
    venueId: string
  }

  export type UserSportUpdateWithoutSportInput = {
    user?: UserUpdateOneRequiredWithoutUserSportsNestedInput
  }

  export type UserSportUncheckedUpdateWithoutSportInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSportUncheckedUpdateManyWithoutSportInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutGroupsAsCaptainNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: MessageUpdateManyWithoutGroupNestedInput
    event?: EventUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
    event?: EventUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    captainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    shareCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueSportUpdateWithoutSportInput = {
    venue?: VenueUpdateOneRequiredWithoutVenueSportsNestedInput
  }

  export type VenueSportUncheckedUpdateWithoutSportInput = {
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type VenueSportUncheckedUpdateManyWithoutSportInput = {
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyGroupInput = {
    userId: string
    confirmed?: boolean
  }

  export type MessageCreateManyGroupInput = {
    id?: string
    userId: string
    text: string
    createdAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueSportCreateManyVenueInput = {
    sportId: string
  }

  export type EventCreateManyVenueInput = {
    id?: string
    groupId: string
    startsAt: Date | string
    weatherSummary?: string | null
  }

  export type VoteCreateManyVenueInput = {
    id?: string
    eventId: string
    userId: string
  }

  export type VenueSportUpdateWithoutVenueInput = {
    sport?: SportUpdateOneRequiredWithoutVenueSportsNestedInput
  }

  export type VenueSportUncheckedUpdateWithoutVenueInput = {
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type VenueSportUncheckedUpdateManyWithoutVenueInput = {
    sportId?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    group?: GroupUpdateOneRequiredWithoutEventNestedInput
    votes?: VoteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: VoteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoteUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyEventInput = {
    id?: string
    userId: string
    venueId: string
  }

  export type VoteUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
    venue?: VenueUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
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