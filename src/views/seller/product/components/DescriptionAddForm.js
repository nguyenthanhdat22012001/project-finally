import PropTypes from 'prop-types';
// import { useState } from 'react';
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
// import "froala-editor/css/plugins/fullscreen.min.css";

import Froala from "react-froala-wysiwyg";
// import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import "./TextAreaFroala.scss";

DescriptionAddForm.propTypes = {
    handleOnChangeDescription: PropTypes.func,
}
DescriptionAddForm.defaultProps = {
    handleOnChangeDescription: null,
}

export default function DescriptionAddForm(props) {
  const {handleOnChangeDescription} = props;
    return (
        <Froala
            // model={description}
            onModelChange={handleOnChangeDescription}
            tag="textarea"
            config={{
                attribution: false,
                placeholder: "Mô Tả Sản Phẩm",
                toolbarButtons: {
                    moreText: {
                        buttons: [
                            "bold",
                            "italic",
                            "underline",
                            "strikeThrough",
                            "subscript",
                            "superscript",
                            "fontFamily",
                            "fontSize",
                            "textColor",
                            "backgroundColor",
                            "inlineClass",
                            "inlineStyle",
                            "clearFormatting"
                        ]
                    },
                    moreParagraph: {
                        buttons: [
                            "alignLeft",
                            "alignCenter",
                            "formatOLSimple",
                            "alignRight",
                            "alignJustify",
                            "formatOL",
                            "formatUL",
                            "paragraphFormat",
                            "paragraphStyle",
                            "lineHeight",
                            "outdent",
                            "indent",
                            "quote"
                        ]
                    },
                    moreRich: {
                        buttons: [
                            "insertLink",
                            "insertImage",
                            "insertVideo",
                            "insertTable",
                            "emoticons",
                            "fontAwesome",
                            "specialCharacters",
                            "embedly",
                            "insertFile",
                            "insertHR"
                        ]
                    },
                    moreMisc: {
                        buttons: [
                            "undo",
                            "redo",
                            "fullscreen",
                            "print",
                            "getPDF",
                            "spellChecker",
                            "selectAll",
                            "html",
                            "help"
                        ],
                        align: "right",
                        buttonsVisible: 2
                    }
                },
                pluginsEnabled: [
                    "table",
                    "spell",
                    "quote",
                    "save",
                    "quickInsert",
                    "paragraphFormat",
                    "paragraphStyle",
                    "help",
                    "draggable",
                    "align",
                    "link",
                    "lists",
                    "file",
                    "image",
                    "emoticons",
                    "url",
                    "video",
                    "embedly",
                    "colors",
                    "entities",
                    "inlineClass",
                    "inlineStyle",
                    // 'codeBeautif '
                    // 'spellChecker',
                    "imageTUI"
                ]
            }}
        />
    );
}