import _mongoose, { client } from "mongoose"

declare global {
    var mongoose: {
        promise: ReturnType<typeof connect> | null;
        conn: typeof _mongoose | null;
    }
}

