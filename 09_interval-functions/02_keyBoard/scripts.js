const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th> 
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.key.charCodeAt(0)}</td> 
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})

// <td>${e.keyCode}</td> 
