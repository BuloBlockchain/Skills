// Step 3: Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Step 4: Define the URL
var url = './news_article.json';

// Step 5: Open the request and set response type
xhr.open('GET', url, true);
xhr.responseType = 'json';

// Step 6: Handle the onload event
xhr.onload = function () {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById('news');

  articles.forEach(function (article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var topicsHeader = document.createElement('h3');
    topicsHeader.textContent = 'Topics:';

    var topicsList = document.createElement('ul');
    article.topics.forEach(function (topic) {
      var listItem = document.createElement('li');
      listItem.textContent = topic;
      topicsList.appendChild(listItem);
    });

    var impactsHeader = document.createElement('h3');
    impactsHeader.textContent = 'Impacts:';

    var impactsList = document.createElement('ul');
    article.impacts.forEach(function (impact) {
      var listItem = document.createElement('li');
      listItem.textContent = impact;
      impactsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(topicsHeader);
    articleDiv.appendChild(topicsList);
    articleDiv.appendChild(impactsHeader);
    articleDiv.appendChild(impactsList);

    articlesDiv.appendChild(articleDiv);
  });
};

// Step 8: Send the request
xhr.send();
