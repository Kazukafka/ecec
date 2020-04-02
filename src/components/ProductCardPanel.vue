<template>
  <body>
    <div class="header">
      <div class="header-logo">EC test</div>
      <div class="header-list">
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </div>
    </div>

    <div class="main">
      <div class="copy-container">
        <h1>EC<span>.</span></h1>
      </div>

      <div class="contents">
        <h3 class="section-title">Contents</h3>
        <div class="contents-item">
          <img src="images/photo1.jpeg">
          <p>Never let me go</p>
          <p>$12.90</p>
          <button
            :title="removeFromFavouriteLabel"
            v-show="product.isFavourite"
            @click="removeFromFavourite(product.id)"
            class="button is-small"
          >
        </div>
        

        </div>
      </div>

      <div class="contact-form">

      </div>
    </div>

    <div class="footer">
      <div class="footer-logo">Progate</div>
      <div class="footer-list">
        <ul>
          <li>会社概要</li>
          <li>採用</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
  </body>
</template>

<style>
body {
  font-family: "Avenir Next";
}

li {
  list-style: none;
}

.header {
  background-color: #26d0c9;
  color: #fff;
  height: 90px;
}

.header-logo {
  float: left;
  font-size: 36px;
  padding: 20px 40px;
}

.header-list li {
  float: left;
  padding: 33px 20px;
}

.main {
  padding: 100px 80px;
}

.copy-container h1 {
  font-size: 140px;
}

.copy-container h2 {
  font-size: 60px;
}

.copy-container span {
  color: #ff4a4a;
}

.contents {
  height: 500px;
  margin-top: 100px;
}

.section-title {
  border-bottom: 2px solid #dee7ec;
  font-size: 28px;
  padding-bottom: 15px;
  margin-bottom: 50px;
}

.contents-item {
  float: left;
  margin-right: 40px;
}

.contents-item p {
  font-size: 24px;
  margin-top: 30px;
}

/* contact-formのpadding-topを100pxにしてください */


.footer {
  background-color: #2f5167;
  color: #fff;
  height: 120px;
  padding: 40px;
}

.footer-logo {
  float: left;
  font-size: 32px;
}

.footer-list {
  float: right;
}

.footer-list li {
  padding-bottom: 20px;
}

</style>
