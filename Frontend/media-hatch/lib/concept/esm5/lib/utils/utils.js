/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
export function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    var t1 = typeof o1;
    /** @type {?} */
    var t2 = typeof o2;
    /** @type {?} */
    var length;
    /** @type {?} */
    var key;
    /** @type {?} */
    var keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
export function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
export function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
export function mergeDeep(target, source) {
    /** @type {?} */
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            var _a, _b;
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
        }));
    }
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLE1BQU0sVUFBVSxNQUFNLENBQUMsRUFBTyxFQUFFLEVBQU87SUFDckMsSUFBSSxFQUFFLEtBQUssRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLElBQUksRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLEtBQUssSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsY0FBYzs7O1FBQ25ELEVBQUUsR0FBRyxPQUFPLEVBQUU7O1FBQ2hCLEVBQUUsR0FBRyxPQUFPLEVBQUU7O1FBQ2QsTUFBYzs7UUFDZCxHQUFROztRQUNSLE1BQVc7SUFDYixJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtRQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQUUsT0FBTyxLQUFLLENBQUM7aUJBQzdDO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjthQUFNO1lBQ0wsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsS0FBSyxHQUFHLElBQUksRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM3QixPQUFPLEtBQUssQ0FBQztpQkFDZDtnQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBQ0QsS0FBSyxHQUFHLElBQUksRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7b0JBQ3RELE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBVTtJQUNsQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3hELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxJQUFTO0lBQ2hDLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEUsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFXLEVBQUUsTUFBVzs7UUFDMUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztJQUN4QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxHQUFROztZQUNuQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFO29CQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLEdBQUcsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQztpQkFDL0M7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxHQUFHLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7YUFDL0M7UUFDSCxDQUFDLEVBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHR3byBvYmplY3RzIG9yIHR3byB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQuXHJcbiAqXHJcbiAqIFR3byBvYmplY3RzIG9yIHZhbHVlcyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50IGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XHJcbiAqXHJcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBwYXNzIGA9PT1gIGNvbXBhcmlzb24uXHJcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBhcmUgb2YgdGhlIHNhbWUgdHlwZSBhbmQgYWxsIG9mIHRoZWlyIHByb3BlcnRpZXMgYXJlIGVxdWFsIGJ5XHJcbiAqICAgY29tcGFyaW5nIHRoZW0gd2l0aCBgZXF1YWxzYC5cclxuICpcclxuICogQHBhcmFtIG8xIE9iamVjdCBvciB2YWx1ZSB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0gbzIgT2JqZWN0IG9yIHZhbHVlIHRvIGNvbXBhcmUuXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgYXJndW1lbnRzIGFyZSBlcXVhbC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmIChvMSA9PT0gbzIpIHJldHVybiB0cnVlO1xyXG4gIGlmIChvMSA9PT0gbnVsbCB8fCBvMiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChvMSAhPT0gbzEgJiYgbzIgIT09IG8yKSByZXR1cm4gdHJ1ZTsgLy8gTmFOID09PSBOYU5cclxuICBsZXQgdDEgPSB0eXBlb2YgbzEsXHJcbiAgICB0MiA9IHR5cGVvZiBvMixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAga2V5OiBhbnksXHJcbiAgICBrZXlTZXQ6IGFueTtcclxuICBpZiAodDEgPT0gdDIgJiYgdDEgPT0gJ29iamVjdCcpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG8xKSkge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobzIpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmICgobGVuZ3RoID0gbzEubGVuZ3RoKSA9PSBvMi5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcclxuICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvMikpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAga2V5U2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgZm9yIChrZXkgaW4gbzEpIHtcclxuICAgICAgICBpZiAoIWVxdWFscyhvMVtrZXldLCBvMltrZXldKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChrZXkgaW4gbzIpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2YgbzJba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpOiBhbnkge1xyXG4gIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XHJcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xyXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG4iXX0=