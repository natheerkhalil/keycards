<template>
    <div class="header __bg-6 __padsm _flex _jc-be _fd-ro _ai-ce"
        style="padding: 25px 100px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <router-link class="__nun" to="/">
            <div class="_flex _fd-ro _cc">
                <img style="max-width: 50px;" src="/icon.png" alt="Logo" class="logo">
                <p class="_sm-hide logo-text" style="margin-top: 5px; font-size: 20px;">
                    &nbsp; &nbsp;Keycards</p>
            </div>
        </router-link>
        <div class="right _flex _fd-ro _ai-ce">

            <router-link to="/login" class="_flex _cc">
                <svg class="__po __fill-1 __hfi-err-4" width="45" height="45" clip-rule="evenodd" fill-rule="evenodd"
                    stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 0v24h-24v-24h24zm-6.118 16.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z" />
                </svg></router-link>

        </div>
    </div>
</template>

<style scoped>
.right {
    position: relative;
}

.create-container {
    position: relative;
    cursor: pointer;
}

.dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid var(--grey_3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.dropdown-item {
    padding: 10px 20px;
    cursor: pointer;
}

.dropdown-item:hover {
    background: var(--theme4);
    color: var(--grey_10);
}


@media only screen and (max-width: 576px) {
    .header {
        padding: 25px 20px !important;
    }
}
</style>