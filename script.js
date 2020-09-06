document.querySelector("#first").addEventListener("click", openmodule);

function openmodule(){
    document.querySelector("#first").removeEventListener("click", openmodule);
    document.querySelector("#module_first").classList.add("open");
    document.querySelector("#module_first").addEventListener("click", closemodule);
}

function closemodule(){
    document.querySelector("#module_first").removeEventListener("click", closemodule);
    document.querySelector("#module_first").classList.remove("open");
    document.querySelector("#first").addEventListener("click", openmodule);
}