import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import LicenseFooter from './components/LicenseFooter.vue'
import { h } from 'vue'

// Define your global function
const InteractiveExample = (name: string) => {
    //alert(`Hello, ${name}!`);
};

const HTTPHeader = () => {}
const glossary = () => {}

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            // This "slot" places the component right after the markdown content
            'doc-after': () => h(LicenseFooter)
        })
    },
    enhanceApp({ app }) {
        // Register the function globally on the Vue application instance
        app.config.globalProperties.InteractiveExample = InteractiveExample;
        app.config.globalProperties.httpheader = HTTPHeader;
        app.config.globalProperties.HTTPHeader = HTTPHeader;
        app.config.globalProperties.Glossary = glossary;
        app.config.globalProperties.glossary = glossary;
        app.config.globalProperties.domxref = glossary;
        app.config.globalProperties.HTTPMethod = glossary;
        app.config.globalProperties.HTMLElement = glossary;
        app.config.globalProperties.htmlelement = glossary;
        app.config.globalProperties.EmbedLiveSample = glossary;
        app.config.globalProperties.CSSxRef = glossary;
        app.config.globalProperties.Cssxref = glossary;
        app.config.globalProperties.RFC = glossary;
        app.config.globalProperties.DOMxRef = glossary;
        app.config.globalProperties.cssxref = glossary;
        app.config.globalProperties.EmbedGHLiveSample = glossary;
        app.config.globalProperties.jsxref = glossary;
        app.config.globalProperties.SVGElement = glossary;
        app.config.globalProperties.MathMLElement = glossary;
        app.config.globalProperties.HtmlElement = glossary;
        app.config.globalProperties.SVGAttr = glossary;
        app.config.globalProperties.svgattr = glossary;
        app.config.globalProperties.CSSXref = glossary;
        app.config.globalProperties.LiveSampleLink = glossary;
        app.config.globalProperties.DOMXref = glossary;
        app.config.globalProperties.rfc = glossary;
        app.config.globalProperties.CSSXRef = glossary;
        app.config.globalProperties.svgelement = glossary;
        app.config.globalProperties.DOMXRef = glossary;
        app.config.globalProperties.SVGelement = glossary;
        app.config.globalProperties.embedlivesample = glossary;
        app.config.globalProperties.svgElement = glossary;
        app.config.globalProperties.svgAttr = glossary;
        app.config.globalProperties.HTMLelement = glossary;
        app.config.globalProperties.CSSSyntaxRaw = glossary;
        app.config.globalProperties.CSSSyntax = glossary;
        app.config.globalProperties.DOMxref = glossary;
        app.config.globalProperties.standard_header = glossary;
        app.config.globalProperties.htmlElement = glossary;
        app.config.globalProperties.csssyntax = glossary;
        app.config.globalProperties.CSSxref = glossary;
        app.config.globalProperties.mathmlelement = glossary;
        app.config.globalProperties.JSxRef = glossary;
        app.config.globalProperties.CSSxREF = glossary;
        app.config.globalProperties.HTMLElement = glossary;
        app.config.globalProperties.HTMLELement = glossary;
        app.config.globalProperties.PreviousNext = glossary;
        app.config.globalProperties.Previous = glossary;
        app.config.globalProperties.ListSubPages = glossary;
        app.config.globalProperties.js_property_attributes = glossary;

        // You could also register global components here
        // app.component('MyGlobalComponent', MyGlobalComponent);
    }
} satisfies Theme;
