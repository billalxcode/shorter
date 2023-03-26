export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SHORTER_BASE_PATH: string
        }
    }
}