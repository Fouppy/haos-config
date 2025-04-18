"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([["9329"],{1192:function(e,t,i){var a=i(73577),n=(i(71695),i(47021),i(57243)),s=i(50778);let o,d,r,l=e=>e;(0,a.Z)([(0,s.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"raised",value(){return!1}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(o||(o=l`:host{background:var(--ha-card-background,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`))}},{kind:"method",key:"render",value:function(){return(0,n.dy)(d||(d=l` ${0} <slot></slot> `),this.header?(0,n.dy)(r||(r=l`<h1 class="card-header">${0}</h1>`),this.header):n.Ld)}}]}}),n.oi)},2383:function(e,t,i){var a=i(73577),n=i(72621),s=(i(71695),i(40251),i(47021),i(57243)),o=i(50778),d=i(35359),r=i(11297),l=i(30137);i(10508);let p,c,h,u,v,g=e=>e;const _="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";(0,a.Z)([(0,o.Mo)("ha-expansion-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"expanded",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"outlined",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({attribute:!1,type:Boolean,reflect:!0})],key:"leftChevron",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({attribute:!1,type:Boolean,reflect:!0})],key:"noCollapse",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[(0,o.IO)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return(0,s.dy)(p||(p=g` <div class="top ${0}"> <div id="summary" class="${0}" @click="${0}" @keydown="${0}" @focus="${0}" @blur="${0}" role="button" tabindex="${0}" aria-expanded="${0}" aria-controls="sect1"> ${0} <slot name="header"> <div class="header"> ${0} <slot class="secondary" name="secondary">${0}</slot> </div> </slot> ${0} <slot name="icons"></slot> </div> </div> <div class="container ${0}" @transitionend="${0}" role="region" aria-labelledby="summary" aria-hidden="${0}" tabindex="-1"> ${0} </div> `),(0,d.$)({expanded:this.expanded}),(0,d.$)({noCollapse:this.noCollapse}),this._toggleContainer,this._toggleContainer,this._focusChanged,this._focusChanged,this.noCollapse?-1:0,this.expanded,this.leftChevron&&!this.noCollapse?(0,s.dy)(c||(c=g` <ha-svg-icon .path="${0}" class="summary-icon ${0}"></ha-svg-icon> `),_,(0,d.$)({expanded:this.expanded})):"",this.header,this.secondary,this.leftChevron||this.noCollapse?"":(0,s.dy)(h||(h=g` <ha-svg-icon .path="${0}" class="summary-icon ${0}"></ha-svg-icon> `),_,(0,d.$)({expanded:this.expanded})),(0,d.$)({expanded:this.expanded}),this._handleTransitionEnd,!this.expanded,this._showContent?(0,s.dy)(u||(u=g`<slot></slot>`)):"")}},{kind:"method",key:"willUpdate",value:function(e){(0,n.Z)(i,"willUpdate",this,3)([e]),e.has("expanded")&&(this._showContent=this.expanded,setTimeout((()=>{this._container.style.overflow=this.expanded?"initial":"hidden"}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;if(e.preventDefault(),this.noCollapse)return;const t=!this.expanded;(0,r.B)(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",t&&(this._showContent=!0,await(0,l.y)());const i=this._container.scrollHeight;this._container.style.height=`${i}px`,t||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=t,(0,r.B)(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.noCollapse||this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,s.iv)(v||(v=g`:host{display:block}.top{display:flex;align-items:center;border-radius:var(--ha-card-border-radius,12px)}.top.expanded{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.top.focused{background:var(--input-fill-color)}:host([outlined]){box-shadow:none;border-width:1px;border-style:solid;border-color:var(--outline-color);border-radius:var(--ha-card-border-radius,12px)}.summary-icon{transition:transform 150ms cubic-bezier(.4, 0, .2, 1);direction:var(--direction);margin-left:8px;margin-inline-start:8px;margin-inline-end:initial}:host([leftchevron]) .summary-icon{margin-left:0;margin-right:8px;margin-inline-start:0;margin-inline-end:8px}#summary{flex:1;display:flex;padding:var(--expansion-panel-summary-padding,0 8px);min-height:48px;align-items:center;cursor:pointer;overflow:hidden;font-weight:500;outline:0}#summary.noCollapse{cursor:default}.summary-icon.expanded{transform:rotate(180deg)}.header,::slotted([slot=header]){flex:1}.container{padding:var(--expansion-panel-content-padding,0 8px);overflow:hidden;transition:height .3s cubic-bezier(.4, 0, .2, 1);height:0px}.container.expanded{height:auto}.secondary{display:block;color:var(--secondary-text-color);font-size:12px}`))}}]}}),s.oi)},68024:function(e,t,i){var a=i(73577),n=(i(71695),i(40251),i(47021),i(57243)),s=i(50778),o=i(27486);i(42877);let d,r,l=e=>e;(0,a.Z)([(0,s.Mo)("assist-pipeline-detail-config")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1,type:Array})],key:"supportedLanguages",value:void 0},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete;const t=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector("ha-form");null==t||t.focus()}},{kind:"field",key:"_schema",value(){return(0,o.Z)((e=>[{name:"",type:"grid",schema:[{name:"name",required:!0,selector:{text:{}}},e?{name:"language",required:!0,selector:{language:{languages:e}}}:{name:"",type:"constant"}]}]))}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){return(0,n.dy)(d||(d=l` <div class="section"> <div class="intro"> <h3> ${0} </h3> <p> ${0} </p> </div> <ha-form .schema="${0}" .data="${0}" .hass="${0}" .computeLabel="${0}"></ha-form> </div> `),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.config.title"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.config.description"),this._schema(this.supportedLanguages),this.data,this.hass,this._computeLabel)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(r||(r=l`.section{border:1px solid var(--divider-color);border-radius:8px;box-sizing:border-box;padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}`))}}]}}),n.oi)},54859:function(e,t,i){var a=i(73577),n=(i(71695),i(92745),i(19423),i(47021),i(57243)),s=i(50778),o=i(27486),d=(i(42877),i(11297));let r,l,p=e=>e;(0,a.Z)([(0,s.Mo)("assist-pipeline-detail-conversation")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_supportedLanguages",value:void 0},{kind:"field",key:"_schema",value(){return(0,o.Z)(((e,t,i)=>{const a=[{name:"",type:"grid",schema:[{name:"conversation_engine",required:!0,selector:{conversation_agent:{language:t}}}]}];return"*"!==i&&null!=i&&i.length&&a[0].schema.push({name:"conversation_language",required:!0,selector:{language:{languages:i,no_sort:!0}}}),"conversation.home_assistant"!==e&&a.push({name:"prefer_local_intents",default:!0,selector:{boolean:{}}}),a}))}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"field",key:"_computeHelper",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}_description`):""}},{kind:"method",key:"render",value:function(){var e,t;return(0,n.dy)(r||(r=p` <div class="section"> <div class="intro"> <h3> ${0} </h3> <p> ${0} </p> </div> <ha-form .schema="${0}" .data="${0}" .hass="${0}" .computeLabel="${0}" .computeHelper="${0}" @supported-languages-changed="${0}"></ha-form> </div> `),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.conversation.title"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.conversation.description"),this._schema(null===(e=this.data)||void 0===e?void 0:e.conversation_engine,null===(t=this.data)||void 0===t?void 0:t.language,this._supportedLanguages),this.data,this.hass,this._computeLabel,this._computeHelper,this._supportedLanguagesChanged)}},{kind:"method",key:"_supportedLanguagesChanged",value:function(e){"*"===e.detail.value&&setTimeout((()=>{const e=Object.assign({},this.data);e.conversation_language="*",(0,d.B)(this,"value-changed",{value:e})}),0),this._supportedLanguages=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(l||(l=p`.section{border:1px solid var(--divider-color);border-radius:8px;box-sizing:border-box;padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}`))}}]}}),n.oi)},46343:function(e,t,i){var a=i(73577),n=(i(71695),i(47021),i(57243)),s=i(50778),o=i(27486);i(42877);let d,r,l=e=>e;(0,a.Z)([(0,s.Mo)("assist-pipeline-detail-stt")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_supportedLanguages",value:void 0},{kind:"field",key:"_schema",value(){return(0,o.Z)(((e,t)=>[{name:"",type:"grid",schema:[{name:"stt_engine",selector:{stt:{language:e}}},null!=t&&t.length?{name:"stt_language",required:!0,selector:{language:{languages:t,no_sort:!0}}}:{name:"",type:"constant"}]}]))}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){var e;return(0,n.dy)(d||(d=l` <div class="section"> <div class="intro"> <h3> ${0} </h3> <p> ${0} </p> </div> <ha-form .schema="${0}" .data="${0}" .hass="${0}" .computeLabel="${0}" @supported-languages-changed="${0}"></ha-form> </div> `),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.stt.title"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.stt.description"),this._schema(null===(e=this.data)||void 0===e?void 0:e.language,this._supportedLanguages),this.data,this.hass,this._computeLabel,this._supportedLanguagesChanged)}},{kind:"method",key:"_supportedLanguagesChanged",value:function(e){this._supportedLanguages=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(r||(r=l`.section{border:1px solid var(--divider-color);border-radius:8px;box-sizing:border-box;padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}`))}}]}}),n.oi)},52511:function(e,t,i){var a=i("73577"),n=(i("71695"),i("40251"),i("47021"),i("57243")),s=i("50778"),o=i("27486"),d=(i("20095"),i("42877"),i("11297"));const r=()=>i.e("5624").then(i.bind(i,40137));let l,p,c,h=e=>e;(0,a.Z)([(0,s.Mo)("assist-pipeline-detail-tts")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_supportedLanguages",value:void 0},{kind:"field",key:"_schema",value(){return(0,o.Z)(((e,t)=>[{name:"",type:"grid",schema:[{name:"tts_engine",selector:{tts:{language:e}}},null!=t&&t.length?{name:"tts_language",required:!0,selector:{language:{languages:t,no_sort:!0}}}:{name:"",type:"constant"},{name:"tts_voice",selector:{tts_voice:{}},context:{language:"tts_language",engineId:"tts_engine"},required:!0}]}]))}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){var e,t;return(0,n.dy)(l||(l=h` <div class="section"> <div class="content"> <div class="intro"> <h3> ${0} </h3> <p> ${0} </p> </div> <ha-form .schema="${0}" .data="${0}" .hass="${0}" .computeLabel="${0}" @supported-languages-changed="${0}"></ha-form> </div> ${0} </div> `),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.tts.title"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.tts.description"),this._schema(null===(e=this.data)||void 0===e?void 0:e.language,this._supportedLanguages),this.data,this.hass,this._computeLabel,this._supportedLanguagesChanged,null!==(t=this.data)&&void 0!==t&&t.tts_engine?(0,n.dy)(p||(p=h`<div class="footer"> <ha-button .label="${0}" @click="${0}"> </ha-button> </div>`),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.try_tts"),this._preview):n.Ld)}},{kind:"method",key:"_preview",value:async function(){if(!this.data)return;const e=this.data.tts_engine,t=this.data.tts_language||void 0,i=this.data.tts_voice||void 0;var a,n;e&&(a=this,n={engine:e,language:t,voice:i},(0,d.B)(a,"show-dialog",{addHistory:!1,dialogTag:"dialog-tts-try",dialogImport:r,dialogParams:n}))}},{kind:"method",key:"_supportedLanguagesChanged",value:function(e){this._supportedLanguages=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(c||(c=h`.section{border:1px solid var(--divider-color);border-radius:8px}.content{padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}.footer{border-top:1px solid var(--divider-color);padding:8px 16px}`))}}]}}),n.oi)},37744:function(e,t,i){var a=i("73577"),n=(i("71695"),i("19423"),i("40251"),i("39527"),i("13334"),i("36993"),i("47021"),i("57243")),s=i("50778"),o=i("27486");i("42877");var d=i("11297");let r,l,p=e=>e;(0,a.Z)([(0,s.Mo)("assist-pipeline-detail-wakeword")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_wakeWords",value:void 0},{kind:"field",key:"_schema",value(){return(0,o.Z)((e=>[{name:"",type:"grid",schema:[{name:"wake_word_entity",selector:{entity:{domain:"wake_word"}}},null!=e&&e.length?{name:"wake_word_id",required:!0,selector:{select:{mode:"dropdown",sort:!0,options:e.map((e=>({value:e.id,label:e.name})))}}}:{name:"",type:"constant"}]}]))}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"willUpdate",value:function(e){var t,i,a,n;e.has("data")&&(null===(t=e.get("data"))||void 0===t?void 0:t.wake_word_entity)!==(null===(i=this.data)||void 0===i?void 0:i.wake_word_entity)&&(null!==(a=e.get("data"))&&void 0!==a&&a.wake_word_entity&&null!==(n=this.data)&&void 0!==n&&n.wake_word_id&&(0,d.B)(this,"value-changed",{value:Object.assign(Object.assign({},this.data),{},{wake_word_id:void 0})}),this._fetchWakeWords())}},{kind:"method",key:"render",value:function(){return(0,n.dy)(r||(r=p` <div class="section"> <div class="content"> <div class="intro"> <h3> ${0} </h3> <p> ${0} </p> <ha-alert alert-type="info"> ${0} </ha-alert> </div> <ha-form .schema="${0}" .data="${0}" .hass="${0}" .computeLabel="${0}"></ha-form> </div> </div> `),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.title"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.description"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.note"),this._schema(this._wakeWords),this.data,this.hass,this._computeLabel)}},{kind:"method",key:"_fetchWakeWords",value:async function(){var e,t;if(this._wakeWords=void 0,null===(e=this.data)||void 0===e||!e.wake_word_entity)return;const i=this.data.wake_word_entity,a=await(n=this.hass,s=i,n.callWS({type:"wake_word/info",entity_id:s}));var n,s,o;this.data.wake_word_entity===i&&(this._wakeWords=a.wake_words,!this.data||null!==(t=this.data)&&void 0!==t&&t.wake_word_id&&this._wakeWords.some((e=>e.id===this.data.wake_word_id))||(0,d.B)(this,"value-changed",{value:Object.assign(Object.assign({},this.data),{},{wake_word_id:null===(o=this._wakeWords[0])||void 0===o?void 0:o.id})}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(l||(l=p`.section{border:1px solid var(--divider-color);border-radius:8px}.content{padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}a{color:var(--primary-color)}`))}}]}}),n.oi)},22380:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(73577),n=(i(71695),i(77439),i(39527),i(41360),i(47021),i(57243)),s=i(50778),o=i(27486),d=i(4855),r=i(35047),l=e([r]);r=(l.then?(await l)():l)[0];let p,c,h,u=e=>e;(0,a.Z)([(0,s.Mo)("assist-render-pipeline-events")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"events",value:void 0},{kind:"field",key:"_processEvents",value(){return(0,o.Z)((e=>{let t;return e.forEach((e=>{t=(0,d.eP)(t,e)})),t}))}},{kind:"method",key:"render",value:function(){const e=this._processEvents(this.events);return e?(0,n.dy)(h||(h=u` <assist-render-pipeline-run .hass="${0}" .pipelineRun="${0}"></assist-render-pipeline-run> `),this.hass,e):this.events.length?(0,n.dy)(p||(p=u`<ha-alert alert-type="error">Error showing run</ha-alert> <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <pre>${0}</pre> </ha-expansion-panel> </ha-card>`),JSON.stringify(this.events,null,2)):(0,n.dy)(c||(c=u`<ha-alert alert-type="warning">There were no events in this run.</ha-alert>`))}}]}}),n.oi);t()}catch(p){t(p)}}))},35047:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(73577),n=(i(71695),i(92745),i(39527),i(67670),i(13334),i(47021),i(57243)),s=i(50778),o=(i(1192),i(17949),i(20095),i(90977),i(2383),i(52745)),d=(i(27196),i(4557)),r=e([o]);o=(r.then?(await r)():r)[0];let l,p,c,h,u,v,g,_,m,y,f,k,b,x,w,$,L,C,R,z,W,A,B,S=e=>e;const E={pipeline:"Pipeline",language:"Language"},Z={engine:"Engine"},M={engine:"Engine"},O={engine:"Engine",language:"Language",intent_input:"Input"},T={engine:"Engine",language:"Language",voice:"Voice",tts_input:"Input"},P={ready:0,wake_word:1,stt:2,intent:3,tts:4,done:5,error:6},D=(e,t)=>e.init_options?P[e.init_options.start_stage]<=P[t]&&P[t]<=P[e.init_options.end_stage]:t in e,F=(e,t,i)=>"error"in e&&i===t?(0,n.dy)(l||(l=S` <ha-alert alert-type="error"> ${0} (${0}) </ha-alert> `),e.error.message,e.error.code):"",j=(e,t,i,a="-start")=>{const s=t.events.find((e=>e.type===`${i}`+a)),d=t.events.find((e=>e.type===`${i}-end`));if(!s)return"";if(!d)return"error"in t?(0,n.dy)(p||(p=S`❌`)):(0,n.dy)(c||(c=S` <ha-circular-progress size="small" indeterminate></ha-circular-progress> `));const r=new Date(d.timestamp).getTime()-new Date(s.timestamp).getTime(),l=(0,o.uf)(r/1e3,e.locale,{maximumFractionDigits:2});return(0,n.dy)(h||(h=S`${0}s ✅`),l)},q=(e,t)=>Object.entries(t).map((([t,i])=>(0,n.dy)(u||(u=S` <div class="row"> <div>${0}</div> <div>${0}</div> </div> `),i,e[t]))),I=(e,t)=>{const i={};let a=!1;for(const n in e)n in t||"done"===n||(a=!0,i[n]=e[n]);return a?(0,n.dy)(v||(v=S`<ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="${0}"></ha-yaml-editor> </ha-expansion-panel>`),i):""};(0,a.Z)([(0,s.Mo)("assist-render-pipeline-run")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"pipelineRun",value:void 0},{kind:"method",key:"render",value:function(){var e,t,i,a;const s=this.pipelineRun&&["tts","intent","stt","wake_word"].find((e=>e in this.pipelineRun))||"ready",o=[],d=(this.pipelineRun.init_options&&"text"in this.pipelineRun.init_options.input?this.pipelineRun.init_options.input.text:void 0)||(null===(e=this.pipelineRun)||void 0===e||null===(e=e.stt)||void 0===e||null===(e=e.stt_output)||void 0===e?void 0:e.text)||(null===(t=this.pipelineRun)||void 0===t||null===(t=t.intent)||void 0===t?void 0:t.intent_input);return d&&o.push({from:"user",text:d}),null!==(i=this.pipelineRun)&&void 0!==i&&null!==(i=i.intent)&&void 0!==i&&null!==(i=i.intent_output)&&void 0!==i&&null!==(i=i.response)&&void 0!==i&&null!==(i=i.speech)&&void 0!==i&&null!==(i=i.plain)&&void 0!==i&&i.speech&&o.push({from:"hass",text:this.pipelineRun.intent.intent_output.response.speech.plain.speech}),(0,n.dy)(g||(g=S` <ha-card> <div class="card-content"> <div class="row heading"> <div>Run</div> <div>${0}</div> </div> ${0} ${0} </div> </ha-card> ${0} ${0} ${0} ${0} ${0} ${0} ${0} ${0} ${0} <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor read-only auto-update .value="${0}"></ha-yaml-editor> </ha-expansion-panel> </ha-card> `),this.pipelineRun.stage,q(this.pipelineRun.run,E),o.length>0?(0,n.dy)(_||(_=S` <div class="messages"> ${0} </div> <div style="clear:both"></div> `),o.map((({from:e,text:t})=>(0,n.dy)(m||(m=S` <div class="${0}">${0}</div> `),`message ${e}`,t)))):"",F(this.pipelineRun,"ready",s),D(this.pipelineRun,"wake_word")?(0,n.dy)(y||(y=S` <ha-card> <div class="card-content"> <div class="row heading"> <span>Wake word</span> ${0} </div> ${0} </div> </ha-card> `),j(this.hass,this.pipelineRun,"wake_word"),this.pipelineRun.wake_word?(0,n.dy)(f||(f=S` <div class="card-content"> ${0} ${0} ${0} </div> `),q(this.pipelineRun.wake_word,M),this.pipelineRun.wake_word.wake_word_output?(0,n.dy)(k||(k=S`<div class="row"> <div>Model</div> <div> ${0} </div> </div> <div class="row"> <div>Timestamp</div> <div> ${0} </div> </div>`),this.pipelineRun.wake_word.wake_word_output.ww_id,this.pipelineRun.wake_word.wake_word_output.timestamp):"",I(this.pipelineRun.wake_word,Z)):""):"",F(this.pipelineRun,"wake_word",s),D(this.pipelineRun,"stt")?(0,n.dy)(b||(b=S` <ha-card> <div class="card-content"> <div class="row heading"> <span>Speech-to-text</span> ${0} </div> ${0} </div> </ha-card> `),j(this.hass,this.pipelineRun,"stt","-vad-end"),this.pipelineRun.stt?(0,n.dy)(x||(x=S` <div class="card-content"> ${0} <div class="row"> <div>Language</div> <div>${0}</div> </div> ${0} ${0} </div> `),q(this.pipelineRun.stt,M),this.pipelineRun.stt.metadata.language,this.pipelineRun.stt.stt_output?(0,n.dy)(w||(w=S`<div class="row"> <div>Output</div> <div>${0}</div> </div>`),this.pipelineRun.stt.stt_output.text):"",I(this.pipelineRun.stt,M)):""):"",F(this.pipelineRun,"stt",s),D(this.pipelineRun,"intent")?(0,n.dy)($||($=S` <ha-card> <div class="card-content"> <div class="row heading"> <span>Natural Language Processing</span> ${0} </div> ${0} </div> </ha-card> `),j(this.hass,this.pipelineRun,"intent"),this.pipelineRun.intent?(0,n.dy)(L||(L=S` <div class="card-content"> ${0} ${0} <div class="row"> <div>Prefer handling locally</div> <div> ${0} </div> </div> <div class="row"> <div>Processed locally</div> <div> ${0} </div> </div> ${0} </div> `),q(this.pipelineRun.intent,O),this.pipelineRun.intent.intent_output?(0,n.dy)(C||(C=S`<div class="row"> <div>Response type</div> <div> ${0} </div> </div> ${0}`),this.pipelineRun.intent.intent_output.response.response_type,"error"===this.pipelineRun.intent.intent_output.response.response_type?(0,n.dy)(R||(R=S`<div class="row"> <div>Error code</div> <div> ${0} </div> </div>`),this.pipelineRun.intent.intent_output.response.data.code):""):"",this.pipelineRun.intent.prefer_local_intents,this.pipelineRun.intent.processed_locally,I(this.pipelineRun.intent,O)):""):"",F(this.pipelineRun,"intent",s),D(this.pipelineRun,"tts")?(0,n.dy)(z||(z=S` <ha-card> <div class="card-content"> <div class="row heading"> <span>Text-to-speech</span> ${0} </div> ${0} </div> ${0} </ha-card> `),j(this.hass,this.pipelineRun,"tts"),this.pipelineRun.tts?(0,n.dy)(W||(W=S` <div class="card-content"> ${0} ${0} </div> `),q(this.pipelineRun.tts,T),I(this.pipelineRun.tts,T)):"",null!==(a=this.pipelineRun)&&void 0!==a&&null!==(a=a.tts)&&void 0!==a&&a.tts_output?(0,n.dy)(A||(A=S` <div class="card-actions"> <ha-button @click="${0}"> Play Audio </ha-button> </div> `),this._playTTS):""):"",F(this.pipelineRun,"tts",s),this.pipelineRun)}},{kind:"method",key:"_playTTS",value:function(){const e=this.pipelineRun.tts.tts_output.url,t=new Audio(e);t.addEventListener("error",(()=>{(0,d.Ys)(this,{title:"Error",text:"Error playing audio"})})),t.addEventListener("canplaythrough",(()=>{t.play()}))}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(B||(B=S`:host{display:block}ha-alert,ha-card{display:block;margin-bottom:16px}.row{display:flex;justify-content:space-between}.row>div:last-child{text-align:right}ha-expansion-panel{padding-left:8px;padding-inline-start:8px;padding-inline-end:initial}.card-content ha-expansion-panel{padding-left:0px;padding-inline-start:0px;padding-inline-end:initial;--expansion-panel-summary-padding:0px;--expansion-panel-content-padding:0px}.heading{font-weight:500;margin-bottom:16px}.messages{margin-top:8px}.message{font-size:18px;margin:8px 0;padding:8px;border-radius:15px;clear:both}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--light-primary-color);color:var(--text-light-primary-color,var(--primary-text-color));direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}`))}}]}}),n.oi);t()}catch(l){t(l)}}))},26942:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t),i.d(t,{DialogVoiceAssistantPipelineDetail:function(){return $}});var n=i(73577),s=(i(71695),i(19423),i(40251),i(88044),i(39527),i(41360),i(36993),i(47021),i(57243)),o=i(50778),d=i(27486),r=i(11297),l=(i(20095),i(28906),i(42877),i(4855)),p=i(66193),c=(i(68024),i(54859),i(46343),i(52511),i(37744),i(22380)),h=i(79575),u=i(81036),v=e([c]);c=(v.then?(await v)():v)[0];let g,_,m,y,f,k,b=e=>e;const x="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",w="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";let $=(0,n.Z)([(0,o.Mo)("dialog-voice-assistant-pipeline-detail")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_hideWakeWord",value(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"_cloudActive",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_submitting",value(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"_supportedLanguages",value:void 0},{kind:"method",key:"showDialog",value:function(e){if(this._params=e,this._error=void 0,this._cloudActive=this._params.cloudActiveSubscription,this._params.pipeline)return this._data=Object.assign({prefer_local_intents:!1},this._params.pipeline),void(this._hideWakeWord=this._params.hideWakeWord||!this._data.wake_word_entity);let t,i;if(this._hideWakeWord=!0,this._cloudActive)for(const a of Object.values(this.hass.entities))if("cloud"===a.platform)if("stt"===(0,h.M)(a.entity_id)){if(t=a.entity_id,i)break}else if("tts"===(0,h.M)(a.entity_id)&&(i=a.entity_id,t))break;this._data={language:(this.hass.config.language||this.hass.locale.language).substring(0,2),stt_engine:t,tts_engine:i}}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._data=void 0,this._hideWakeWord=!1,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"firstUpdated",value:function(){this._getSupportedLanguages()}},{kind:"method",key:"_getSupportedLanguages",value:async function(){const{languages:e}=await(0,l.Dy)(this.hass);this._supportedLanguages=e}},{kind:"field",key:"_hasWakeWorkEntities",value(){return(0,d.Z)((e=>Object.keys(e).some((e=>e.startsWith("wake_word.")))))}},{kind:"method",key:"render",value:function(){var e,t,i;if(!this._params||!this._data)return s.Ld;const a=null!==(e=this._params.pipeline)&&void 0!==e&&e.id?this._params.pipeline.name:this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.add_assistant_title");return(0,s.dy)(g||(g=b` <ha-dialog open @closed="${0}" scrimClickAction escapeKeyAction .heading="${0}"> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${0}" .path="${0}"></ha-icon-button> <span slot="title" .title="${0}">${0}</span> ${0} </ha-dialog-header> <div class="content"> ${0} <assist-pipeline-detail-config .hass="${0}" .data="${0}" .supportedLanguages="${0}" keys="name,language" @value-changed="${0}" ?dialogInitialFocus="${0}"></assist-pipeline-detail-config> <assist-pipeline-detail-conversation .hass="${0}" .data="${0}" keys="conversation_engine,conversation_language,prefer_local_intents" @value-changed="${0}"></assist-pipeline-detail-conversation> ${0} <assist-pipeline-detail-stt .hass="${0}" .data="${0}" keys="stt_engine,stt_language" @value-changed="${0}"></assist-pipeline-detail-stt> <assist-pipeline-detail-tts .hass="${0}" .data="${0}" keys="tts_engine,tts_language,tts_voice" @value-changed="${0}"></assist-pipeline-detail-tts> ${0} </div> <ha-button slot="primaryAction" @click="${0}" .disabled="${0}" dialogInitialFocus> ${0} </ha-button> </ha-dialog> `),this.closeDialog,a,this.hass.localize("ui.common.close"),x,a,a,this._hideWakeWord&&!this._params.hideWakeWord&&this._hasWakeWorkEntities(this.hass.states)?(0,s.dy)(_||(_=b`<ha-button-menu slot="actionItems" @action="${0}" @closed="${0}" menu-corner="END" corner="BOTTOM_END"> <ha-icon-button .path="${0}" slot="trigger"></ha-icon-button> <mwc-list-item> ${0} </mwc-list-item></ha-button-menu>`),this._handleShowWakeWord,u.U,w,this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.add_streaming_wake_word")):s.Ld,this._error?(0,s.dy)(m||(m=b`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):s.Ld,this.hass,this._data,this._supportedLanguages,this._valueChanged,!(null!==(t=this._params.pipeline)&&void 0!==t&&t.id),this.hass,this._data,this._valueChanged,this._cloudActive||"cloud"!==this._data.tts_engine&&"cloud"!==this._data.stt_engine?s.Ld:(0,s.dy)(y||(y=b` <ha-alert alert-type="warning"> ${0} <a href="/config/cloud" slot="action"> <ha-button> ${0} </ha-button> </a> </ha-alert> `),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.no_cloud_message"),this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.no_cloud_action")),this.hass,this._data,this._valueChanged,this.hass,this._data,this._valueChanged,this._hideWakeWord?s.Ld:(0,s.dy)(f||(f=b`<assist-pipeline-detail-wakeword .hass="${0}" .data="${0}" keys="wake_word_entity,wake_word_id" @value-changed="${0}"></assist-pipeline-detail-wakeword>`),this.hass,this._data,this._valueChanged),this._updatePipeline,this._submitting,null!==(i=this._params.pipeline)&&void 0!==i&&i.id?this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.update_assistant_action"):this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.add_assistant_action"))}},{kind:"method",key:"_handleShowWakeWord",value:function(){this._hideWakeWord=!1}},{kind:"method",key:"_valueChanged",value:function(e){this._error=void 0;const t={};e.currentTarget.getAttribute("keys").split(",").forEach((i=>{t[i]=e.detail.value[i]})),this._data=Object.assign(Object.assign({},this._data),t)}},{kind:"method",key:"_updatePipeline",value:async function(){this._submitting=!0;try{var e,t,i,a,n,s,o,d,r,l;const p=this._data,c={name:p.name,language:p.language,conversation_engine:p.conversation_engine,conversation_language:null!==(e=p.conversation_language)&&void 0!==e?e:null,prefer_local_intents:null===(t=p.prefer_local_intents)||void 0===t||t,stt_engine:null!==(i=p.stt_engine)&&void 0!==i?i:null,stt_language:null!==(a=p.stt_language)&&void 0!==a?a:null,tts_engine:null!==(n=p.tts_engine)&&void 0!==n?n:null,tts_language:null!==(s=p.tts_language)&&void 0!==s?s:null,tts_voice:null!==(o=p.tts_voice)&&void 0!==o?o:null,wake_word_entity:null!==(d=p.wake_word_entity)&&void 0!==d?d:null,wake_word_id:null!==(r=p.wake_word_id)&&void 0!==r?r:null};null!==(l=this._params.pipeline)&&void 0!==l&&l.id?await this._params.updatePipeline(c):this._params.createPipeline?await this._params.createPipeline(c):console.error("No createPipeline function provided"),this.closeDialog()}catch(p){this._error=(null==p?void 0:p.message)||"Unknown error"}finally{this._submitting=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[p.yu,(0,s.iv)(k||(k=b`.content>:not(:last-child){margin-bottom:16px;display:block}ha-alert{margin-bottom:16px;display:block}a{text-decoration:none}`))]}}]}}),s.oi);a()}catch(g){a(g)}}))}}]);
//# sourceMappingURL=9329.9ebd60a8f296a5ee.js.map