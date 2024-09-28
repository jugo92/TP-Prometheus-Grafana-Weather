const express = require('express');

const app = express();

app.get('/metrics', async (req, res) => {
    // modifiez l'endpoint pour retourner les métriques demandées
    return res.send("Retourne les métriques demandées");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur ${PORT}`);
});
