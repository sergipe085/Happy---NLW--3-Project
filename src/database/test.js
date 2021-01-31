const database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

database.then(async (db) => {

    const newOrphanage = {
        lat: "-3.776416",
        lng: "-38.5435929",
        name: "Lar dos Meninos",
        description: "Presta assistencia a criancas de 06 a 15 anos que se encontre em situacao de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1609005870928-3fb5409180c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",

            "https://images.unsplash.com/photo-1610551916439-7fbe5373c3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0",    
    }

    //inserir dados na tabela para
    //await saveOrphanage(db, newOrphanage);

    //consultar dados da tabela
    //const selectedOrphanage =  await db.all("SELECT * FROM orphanages");
    //console.log(selectedOrphanage);

    //consultar somente um orfanato pelo id del
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    //console.log(orphanage);

    //deletar dado da tabela
    //console.log(await db.run('DELETE FROM orphanages'));
})