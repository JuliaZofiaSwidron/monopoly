document.querySelector("#first").addEventListener("click", openmoduleone);
document.querySelector("#second").addEventListener("click", openmoduletwo);
document.querySelector("#third").addEventListener("click", openmodulethree);

function openmoduleone(){
    document.querySelector("#first").removeEventListener("click", openmoduleone);
    document.querySelector("#module_first").classList.add("open");
    document.querySelector("#module_first").addEventListener("click", closemoduleone);
}

function closemoduleone(){
    document.querySelector("#module_first").removeEventListener("click", closemoduleone);
    document.querySelector("#module_first").classList.remove("open");
    document.querySelector("#first").addEventListener("click", openmoduleone);
}

function openmoduletwo(){
    document.querySelector("#second").removeEventListener("click", openmoduletwo);
    document.querySelector("#module_second").classList.add("open");
    document.querySelector("#module_second").addEventListener("click", closemoduletwo);
}

function closemoduletwo(){
    document.querySelector("#module_second").removeEventListener("click", closemoduletwo);
    document.querySelector("#module_second").classList.remove("open");
    document.querySelector("#second").addEventListener("click", openmoduletwo);
}

function openmodulethree(){
    document.querySelector("#third").removeEventListener("click", openmodulethree);
    document.querySelector("#module_third").classList.add("open");
    document.querySelector("#module_third").addEventListener("click", closemodulethree);
}

function closemodulethree(){
    document.querySelector("#module_third").removeEventListener("click", closemodulethree);
    document.querySelector("#module_third").classList.remove("open");
    document.querySelector("#third").addEventListener("click", openmodulethree);
}