const express = require('express')
const cors = require('cors')
const app = express()

const bd = [
    {
        "id": 1,
        "title": {
            "pt": "Trilhas",
            "en": "Steps",
            "es": "Pasos"
        },
        "description": {
            "pt": "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.",
            "en": "Create study plans by specifying classes or courses and defining the order in which your students should study.",
            "es": "Crea planes de estudio especificando clases o cursos y definiendo el orden en el que tus alumnos deben estudiar."
        }
    },
    {
        "id": 2,
        "title": {
            "pt": "Playlists",
            "en": "Playlists",
            "es": "Playlists"
        },
        "description": {
            "pt": "Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência e offline.",
            "en": "Turn a collection into a playlist so you can watch videos and audios in sequence and offline.",
            "es": "Convierta una colección en una lista de reproducción para que pueda ver videos y audios en secuencia y sin conexión."
        }
    },
    {
        "id": 3,
        "title": {
            "pt": "Coleções",
            "en": "Collections",
            "es": "Colecciones"
        },
        "description": {
            "pt": "Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência.",
            "en": "Create collections, add content, rearrange items, and have it your way to enhance the experience.",
            "es": "Cree colecciones, agregue contenido, reorganice elementos y déjelo a su manera para mejorar la experiencia."
        }
    }
]

const list = [
    {
        "id": 1,
        "title": "Produto 1",
    },
    {
        "id": 2,
        "title": "Produto 1",
    },
    {
        "id": 3,
        "title": "Produto 1",
    },
    {
        "id": 4,
        "title": "Produto 1",
    },
    {
        "id": 5,
        "title": "Produto 1",
    }
]

app.use(cors())
app.get('/', (req, res) => {
    res.send(bd)
})

app.get('/list-products', (req, res) => {
    res.send(list)
})

app.post('/list-products', (req, res) => {
    const { product: newProduct } = req.body;

    list.push({
        ...newProduct,
        id: 6,
    })
    id++;

    res.send(list)
})

app.listen(process.env.PORT || 3000)
