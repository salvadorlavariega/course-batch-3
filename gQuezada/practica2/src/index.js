const setLanguage = (language) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/'+language+'.json');
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.response);
            const template =
            `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">${response.header}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">${response.nav[0]}<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">${response.nav[1]}</a>
                        </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <select name="idioma" id="idioma" onchange="setLanguage(this.value)">
                                <option value="es">Español</option>
                                <option value="en">Inglés</option>
                            </select>
                        </form>
                    </div>
                </nav>

                <section class="body">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">${response.title}</h5>
                                            <p class="card-text">${response.content}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                    <div class="alert alert-light" role="alert">
                                        ${response.comments[0]}
                                    </div>
                                    <div class="alert alert-light" role="alert">
                                        ${response.comments[1]}
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            `
            const body = document.querySelector('body');
            body.innerHTML=template;
        }
    };

    xhr.send();
}

(() => {
    setLanguage('es');
})();
