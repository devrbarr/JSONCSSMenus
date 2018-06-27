
function RenderMenu(JsonMenu){
    return `<ul>${ JsonMenu.map( (mi) => `<li><a href="${mi.URL}">${mi.Text}</a>${ mi.SubMenus ? RenderMenu(mi.SubMenus) : ''}</li>`).join('')}</ul>`;
}


const pMenu = fetch('http://localhost:3000/Menus');

pMenu
    .then(data => data.json())
    .then(dataMenuItems =>{
        const html = RenderMenu(dataMenuItems);

        document.querySelector('nav').innerHTML = html;
    })
    .catch(err => console.log(err));


    