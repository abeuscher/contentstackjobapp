import React, { useState, useEffect } from 'react';

const marketoScriptId = 'mktoForms';

export default function MarketoForm({ formId, className, onValidate, onSubmit, onSuccess }) {

    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        if (!document.getElementById(marketoScriptId)) {
            loadScript();
        } else {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        isLoaded &&
            window.MktoForms2.loadForm(
                '//app-sj21.marketo.com',
                '489-WNI-383',
                formId,
                form => {
                    destyleMktoForm(form)
                    form.onSubmit(onSubmit)
                    form.onValidate(onValidate)
                    form.onSuccess(onSuccess)
                }
            )
    }, [isLoaded, formId, onSubmit, onValidate, onSuccess]);

    const loadScript = () => {
        var s = document.createElement('script');
        s.id = marketoScriptId;
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//app-sj21.marketo.com/js/forms2/js/forms2.min.js';
        s.onreadystatechange = () => {
            if (this.readyState === 'complete' || this.readyState === 'loaded') {
                setIsLoaded(true);
            }
        }
        s.onload = () => setIsLoaded(true)
        document.getElementsByTagName('head')[0].appendChild(s)
    };

    return (
        <div>
            <form id={`mktoForm_${formId}`} className={className}></form>
        </div>
    );
}

function destyleMktoForm(mktoForm) {
    let formEl = mktoForm.getFormElem()
    let arrayify = getSelection.call.bind([].slice);
    let styledEls = arrayify(formEl[0].querySelectorAll("[style]")).concat(formEl)
    let styleSheets = arrayify(document.styleSheets)
    formEl[0].removeAttribute("style")
    styledEls.map(el => {
        if (el.removeAttribute) {
            el.removeAttribute("style")
        }
        return false
    })
    styleSheets.map(ss => {
        if (ss.href) {
            if (ss.href.indexOf("marketo.com") > -1) {
                ss.disabled = true
            }
        }
        return false
    })

};