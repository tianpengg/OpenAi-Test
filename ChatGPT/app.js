import express from "express";
const router = express.Router()
import cors from 'cors'
import { ChatGPTAPI } from 'chatgpt'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const api = new ChatGPTAPI({
  sessionToken: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..xsbdKdrbmteioC0o.YzSlvIXHeo7fuhVOy5mL6i_B6qw_SnZ7upvp4T3Axw6JZBZWqnVgINp--dJRZeB_fyrcpyX8-Z5rz_JxbcaKzYJoUPN9iVdUEyy6gAvIZEk008OvVahxOPZfbqBZDmwcmir1ES6wfrGP1vAAcOZXcZxD50sOrgNcGlKHDZrt-W4ngQ0OsriaSrUsled5zENV9qkI2FHmzi4HAvCPttVpQLIAR_UebnUdAthmBpJzRcdaOrrLKh4fHWhj0mHgYSDM7OcPGzUGGOAebLM7sQwxWy9opfy-gCxVmaYkh-quLmatKrlG4Wjp43BkxQWTJAisTIUeGww6q-zXf5fzJWVKUT7vEqX1gMcMBuKdPv07r66vW-i-k6mThe72Q2Wjx2rT_A8NDmUL-xiJRAGv-dJhVuTjZiron2wvi6zU6fPjbqzbE29wGFKlo4S2_8leEaan_vhIYwgWuWA-Ro_uNF5rFpRzlf_kSb2rDENk6reRP2zVBOlRh8829TpO0Pn1xt1XdZZCO-F3-o6Chk84Vub4HHcdtQxjBhK7gPGPz16Z2gyDTpvqSnqdui1NY38TRf1Z7c59KZqYyKitMMUURZ6zAdgOjbSX52ogNgl3J9GDK6VD5Bh_a4ngglN3iepupLppn_vZOcS5RiITMNpB5Dv18jrJk2WbgIOscfTuNLx6UQ70JtSxGfBrRSISrMCmN1dg8d8xf7Iv5YV4aYEedmjhNc-KYE6qXXBXALyTAoK-IvZrvlvLnzVu669gIMYlwAwTgagN8v-2H9XsbN1gMXABB-i5mTZAKFgWUgM7J1tD2g3twjJCxUjB7gnW7BOYHT1kmZFGTuZscM7t777VEohDscWp-DciOaVZShTLW-4sHpc6NblstjyKJHjxGnkYa_QL9_Lw1k-g3V32Bl1glF2iPVPO7zt5zW37ZZfqgzRGfqnhpKU7CpfMm_sThbUUqoWj7IYgU4-i8u0unittMykMql1Bmtc4dhUIt1s2iPtooFrvdg7uSjnYchB82jsUK3zpo7VfGwN-Ew79FLxqn6wi4QhGy6wU_nbJFoLOH4lDKeao4PaM-DRQitYC_T5PVD-S0dYxVqI4dRYX-kxg6w0Rf35kDtERTdMCbRS5bShx5GedC2eWRMVZzMtHrnE8NtzK3AQcF1KalgTvsE0BNbkFEEiL9Lyn4OnTaDTc3s9L08EmYFCjKK2mJLj2sY1xg87PQFPBkqJJTkEQOBBA3RV8A4cc8qGjbr3gB0BJbZLqJSCl-6LWz5cqIX7OFlxZMVkVv6yOFotEemuvyfvLiyhHgHMjDxabQcDRRe0OigXgpai17qbAClNsnZXtEK8xfA1_Ds4WP8355WVGsLZC2TslhaCG7Lnug91u0_gxON5i8TZOuQr6UH8bPWLg01QEaaqtnOZbVIc7B432H7LowBDXE5nE62WxfeJAp1Pr45BmEtufbQBmeTxmAdQX2cReECBlPGW2OikALmXfLPHUWg3RQ4tAUg9ll2iZZHvj9Dxer0HWDQWT3uY6XBx9RA992kHEs4ZoFCLI93qeESPHLE-H6_0Nv5ocEaFmrrNTwvJNSJbbA84dldl19KY0VdQHVJSn1hYfjDi3udTbrrONCFTef3AjBIpq6NHT0-PQxGgjXTOswGpTtRLvMj8WVzCqdFl3kG2P08Op7QffnCHqP3UlaTSGKe4bM5ed9LLK9ctHV0j3xV8ItSkeaDubO0H_vjhcvfVhUgb15KQ_Vw15TawULtlIVqr1nVgrC-_KOfygq1nPt25QeSeZHMM-j5zpEuRkRnfFIMr15NosxygLZfQTooxvqDvdtltDK6NKJv7DgMgKaPDiaP5VLJVz6EPGD8xwJs7WszVzq49a1qS-PaAuiL5oC93n7IKB8R0wh_6POxXxLeJn0be1Afi9w4ca-G7kyb830I9ech1H7WLu-NOTgix1DJ2_nVRj5Kd4_dzHWu9IV3nVF4aYpsPFBcZUPrr31UZNI3IHmMyhaMzuTNW-XlJsvf0WugZxoUeMzhYG4cJRY2VTk3orbKQJe5SCu9n606Oi0NMD7BNyeGhBxToy2aXFKHlrwlZWIJrgFyPHpfaYfjvfSb-wj3YxM4cReiHLIZC8LsAkBG9RW0l9chPBJJkhvLrvLQQF6U_03J7tCbWXHHdiPtMfWNSFSTlxh5DxP4Dkq0L31h52vap3_78zs9o_KSelcx2cE3IiEAkAhbQGOI4iZc7PY-DAR-gav5F-5g5wDzOay2iIg_f_7xDSoXIVZWSB33O5UVQiTXGI75duOwiA8TXToy-rv_GlAGOnZ4d4XYzE-X2gAxUq1n8-Py1BCkFy4f1P0w.9FVs2cXL1_F6GkGDISumpg"
})
api.ensureAuth()

// 聊天接口
router.post('/chat', async (req, res) => {
  console.log(req.body.text);
  var text = req.body.text
  await example(text).then((result) => {
    console.log(result);
    res.send({
      text: result
    })
  }).catch((err) => {

  });

})

app.use('/api', router)
app.listen(8992, () => {
  console.log('running');

})

// 聊天接口
async function example (text) {
  const response = await api.sendMessage(
    text
  )
  return response
}