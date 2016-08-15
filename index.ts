import { doop, field, collection, action, Mapper, Cursor } from "doop";
import { Map } from "immutable";

export function immutableMapMapper<Key, Value>(): Mapper<Value, Map<Key, Value>, Key> {
    return {

        empty: Map<Key, Value>(),

        get(collection: Map<Key, Value>, address: Key) {
            return collection.get(address);
        },

        set(collection: Map<Key, Value>, address: Key, value: Value) {
            return value === undefined
                ? collection.remove(address)
                : collection.set(address, value);
        }
    };
}
