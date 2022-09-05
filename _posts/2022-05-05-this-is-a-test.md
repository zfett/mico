---
title     : "This is a test."
author    : "Zachary Fetters"
---
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### heading 6

---

## Paragraphs & Text Styling

This is a sentence.

This is a paragraph.

Iure doloremque *magnam eveniet ullam.* Earum quaerat corporis occaecati autem aut nemo. Aliquam eum qui dolorum.

Voluptatem blanditiis non maiores autem deleniti numquam. **Ea officia magnam hic quibusdam enim.** Sed aut ducimus enim qui pariatur enim et. Incidunt sunt iure nihil ut et dolor. Sed id ab quaerat. Labore et et inventore aut a ea aliquid architecto.

Quia alias in rerum quae nihil quia in. ~~Voluptatem sunt vitae architecto.~~ Sint aliquam et eligendi rerum labore. Assumenda ut dolor veritatis omnis necessitatibus numquam nesciunt eaque. Blanditiis nesciunt nesciunt et omnis id labore. Qui sit delectus mollitia.

Consequatur dolor voluptas commodi ipsa rerum occaecati. `Ex asperiores commodi cumque sint fugiat.` Quos cum dolore necessitatibus voluptatem velit hic dolorum. Voluptate earum voluptatem eaque omnis. Eligendi quis fugiat reprehenderit ut veritatis amet pariatur. Ipsam cum quae voluptatem iusto.

Illo minima voluptates nostrum aut aliquid. Dolor consequuntur [laboriosam delectus](/) vel. Nulla dolor cumque qui quas provident dolor deserunt. Quis aperiam natus ut sint. Vel aut reiciendis voluptatibus occaecati. Deleniti quae cum tempora voluptatem ullam commodi.

---

## Images

![My cat, Mittens!](/assets/img/post/mittens-small.jpg)

![My cat, Mittens, but tiny](/assets/img/post/mittens-tiny.jpg)

![My sister's cat, Rory!](/assets/img/post/rory-tall.jpg)

![A transparent image](/assets/img/post/transparency-test.webp)

---

## Tables

| Item         | Price     | # In stock |
|--------------|-----------|------------|
| Juicy Apples | 1.99      | *7*        |
| Bananas      | **1.89**  | 5234       |

| Tables   |      Are      |  Cool | a      | dsf |     |   | fds |   |   |
|----------|:-------------:|------:|--------|-----|-----|---|-----|---|---|
| col 1 is |  left-aligned | $1600 |        | f   | dsf |   |     |   |   |
| col 2 is |    centered   |   $12 |        |     |     |   | ds  |   |   |
| col 3 is | right-aligned |    $1 |        |     | ds  |   |     |   |   |
|          |               |       |        |     |     |   |     |   |   |
|          |               |       |        |     |     |   |     |   |   |
|          |               |       |        |     |     |   |     |   |   |
|          |               |       |        |     |     |   |     |   |   |
|          |               |       | sdfs   |     |     |   |     |   |   |
|          |               |       | dsfdsf |     |     |   |     |   |   |

---

## Code Boxes

```cs
public Doom(CommandLineArgs args, Config config, GameContent content, IVideo video, ISound sound, IMusic music, IUserInput userInput)
{
    video = video ?? NullVideo.GetInstance();
    sound = sound ?? NullSound.GetInstance();
    music = music ?? NullMusic.GetInstance();
    userInput = userInput ?? NullUserInput.GetInstance()
    this.args = args;
    this.config = config;
    this.content = content;
    this.video = video;
    this.sound = sound;
    this.music = music;
    this.userInput = userInput
    events = new List<DoomEvent>();
}
```

```css
/* element code */
::selection {
    background: $color-blue-5;
    color: $color-slate-0;
    text-shadow: none;
}

html {
    scrollbar-color: $color-blue-0 $color-slate-1;
    scrollbar-width: thin;
}

::-webkit-scrollbar {
    width: 10px;
    height: 100%;
    background-color: $color-slate-1;
}

::-webkit-scrollbar-thumb { background: $color-blue-0; }

body {
    font-family: $font-sans;
    background: url("/assets/img/noise-dark.webp") repeat center/128px $color-slate-0;
    background-attachment: fixed;
    color: $color-slate-6;
    font-size: $size-nor;
    font-weight: 500;
    margin: 4em auto;
    max-width: 950px;
}
```
