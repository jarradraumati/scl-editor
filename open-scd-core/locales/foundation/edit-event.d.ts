/** Intent to `parent.insertBefore(node, reference)` */
export declare type Insert = {
    parent: Node;
    node: Node;
    reference: Node | null;
};
export declare type NamespacedAttributeValue = {
    value: string | null;
    namespaceURI: string | null;
};
export declare type Value = string | null;
export declare type AttributeValue = Value | NamespacedAttributeValue;
/**
 * Intent to set or remove (if null) attributes on element
 * @deprecated - use `UpdateNS` for updating namespaced attributes instead.
 */
export declare type Update = {
    element: Element;
    attributes: Partial<Record<string, AttributeValue>>;
};
/** Intent to set or remove (if null) attributes on element */
export declare type UpdateNS = {
    element: Element;
    attributes: Partial<Record<string, Value>>;
    attributesNS: Partial<Record<string, Partial<Record<string, Value>>>>;
};
/** Intent to remove a node from its ownerDocument */
export declare type Remove = {
    node: Node;
};
/** Represents the user's intent to change an XMLDocument */
export declare type Edit = Insert | Update | UpdateNS | Remove | Edit[];
export declare function isComplex(edit: Edit): edit is Edit[];
export declare function isInsert(edit: Edit): edit is Insert;
export declare function isNamespaced(value: AttributeValue): value is NamespacedAttributeValue;
export declare function isUpdate(edit: Edit): edit is Update;
export declare function isUpdateNS(edit: Edit): edit is UpdateNS;
export declare function isRemove(edit: Edit): edit is Remove;
export declare type EditEvent<E extends Edit = Edit> = CustomEvent<E>;
export declare function newEditEvent<E extends Edit>(edit: E): EditEvent<E>;
declare global {
    interface ElementEventMap {
        ['oscd-edit']: EditEvent;
    }
}
export declare function handleEdit(edit: Edit): Edit;
