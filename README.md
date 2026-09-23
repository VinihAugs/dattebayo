# Shinobi Archives

Enciclopédia interativa do universo Naruto, com personagens, clãs, vilas, equipes, bijū, Kekkei Genkai, Akatsuki e Kara.

## Executar localmente

Requer Python 3 ou outro servidor HTTP estático:

```bash
python3 -m http.server 8000 --directory dist
```

Acesse [http://localhost:8000](http://localhost:8000).

## Estrutura

- `dist/app.js`: navegação, páginas e interações.
- `dist/data.js`: registros de exemplo e valores ilustrativos dos atributos.
- `dist/service.js`: camada de acesso aos dados, preparada para uma futura API REST.
- `dist/style.css`: layout, responsividade e animações.
- `dist/hero.jpg`: arte da página inicial.

O site usa dados locais nesta versão. A busca e os filtros funcionam sem serviços externos.
