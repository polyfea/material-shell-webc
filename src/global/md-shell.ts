import { setNonce } from "@stencil/core";

export default function() { 
    const nonceMeta = document.head.querySelector('meta[name="csp-nonce"]');
    if( !nonceMeta ) return;
    const nonce = nonceMeta.getAttribute("content");
    setNonce(nonce);
}