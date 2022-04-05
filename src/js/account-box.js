document.addEventListener("click", async function (e) {
    if(e.target.classList.contains('account-box__icon')){
        e.preventDefault();
        e.target.nextSibling.nextElementSibling?.classList.toggle('is-active');
    } else if((e.target.classList.contains('account-box__icon') && (e.target.nextSibling.nextElementSibling.classList.contains('is-active')))){
        e.preventDefault();
        e.target.nextSibling.nextElementSibling?.classList.remove('is-active');
    } else {
        document.querySelectorAll('.account-box__tooltip').forEach(function (item){
            item?.classList.remove('is-active');
            item?.nextSibling.nextElementSibling?.classList.remove('is-active');
        })
    }
});