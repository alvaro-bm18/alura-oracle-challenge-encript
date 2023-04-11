const $ = selector => document.querySelector(selector);

const $empty = $(".empty-output");
const $containerOutput = $(".output");
const $output = $(".text-output");
const $input = $(".input");
const $enc = $(".encr");
const $des = $(".dese");
const $cop = $(".copy");

const encript = () => {
    const text = $input.value;
    $output.innerText = encriptText(text);
    $empty.style.display = "none";
    $containerOutput.style.display = "flex";
};

const desencript = () => {
    const text = $input.value;
    $output.innerText = desencriptText(text);
    console.log($empty.style.display);
    $empty.style.display = "none";
    $containerOutput.style.display = "flex";
};

const copy = () => {
    const text = $output.innerText;
    navigator.clipboard.writeText(text);
    alert(`Has copiado el texto exitosamente: ${text}`);
};

$enc.addEventListener("click", encript);
$des.addEventListener("click", desencript);
$cop.addEventListener("click", copy);