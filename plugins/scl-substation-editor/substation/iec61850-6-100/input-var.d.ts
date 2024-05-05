import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from '../base-substation-element-editor.js';
/** Pane rendering `InputVar` element with its children */
export declare class InputVarEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderInputVar(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
