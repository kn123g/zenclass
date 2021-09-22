let timer = document.getElementById('countDown');
let begin = 10;

setTimeout(() => {
    timer.innerHTML = begin;
    begin--;
    setTimeout(() => {
        timer.innerHTML = begin;
        begin--;
        setTimeout(() => {
            timer.innerHTML = begin;
            begin--;
            setTimeout(() => {
                timer.innerHTML = begin;
                begin--;
                setTimeout(() => {
                    timer.innerHTML = begin;
                    begin--;
                    setTimeout(() => {
                        timer.innerHTML = begin;
                        begin--;
                        setTimeout(() => {
                            timer.innerHTML = begin;
                            begin--;
                            setTimeout(() => {
                                timer.innerHTML = begin;
                                begin--;
                                setTimeout(() => {
                                    timer.innerHTML = begin;
                                    begin--;
                                    setTimeout(() => {
                                        timer.innerHTML = begin;
                                        begin--;
                                        setTimeout(() => {
                                            timer.innerHTML = 'Happy Independence Day';
                                            timer.classList.add('text-danger')
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)