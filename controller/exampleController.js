const exampleController = {}

exampleController.index = async (req, res) => {
    const htmlMessage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CI/CD Success Message</title>
        </head>
        <body>
            <h1>Hallo semuanya!</h1>
            <p>Ini adalah pesan sukses yang ditampilkan setelah Anda berhasil melakukan CI/CD Back-End.</p>
            <p>Selamat dan sukses selalu!</p>
        </body>
        </html>
    `;

    res.send(htmlMessage);
}

module.exports = exampleController;
