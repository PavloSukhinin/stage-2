"use strict";(self.webpackChunkbinary_studio_academy_2021_stage_2=self.webpackChunkbinary_studio_academy_2021_stage_2||[]).push([[416],{47333:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c},metadata:function(){return o}});var n=a(63366),l=(a(67294),a(64983)),i=a(83105),r=a(30592),m=["components"],o={orderId:1,author:"Viktoriia Vasylenko",title:"How to work with Git",description:"Вікторія розповідає про основи <strong>Git</strong> та найбільш поширені команди. А також показує весь процес роботи з Git: від клонування репозиторію до створення пул-реквестів.",keywords:["hola","guapa"],duration:"38 min",publishedAt:"2021-12-08T10:00:00",hiddenFromMainPage:!1},s={},p={metadata:o,_frontmatter:s},g=i.Fq;function c(e){var t=e.components,a=(0,n.Z)(e,m);return(0,l.kt)(g,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",null,(0,l.kt)("h1",null,(0,l.kt)("strong",null,"Як працювати з Git"))),(0,l.kt)(i.SQ,{currentLanguage:"ua",languages:{en:"lectures/how-to-work-with-git/en",ua:"lectures/how-to-work-with-git/ua"},mdxType:"Language"}),(0,l.kt)("div",null,(0,l.kt)("div",{className:"author"},(0,l.kt)("div",{className:"avatar-wrapper"},(0,l.kt)("object",{className:"avatar-object",role:"img",data:r.VI,"aria-label":"Viktoriia Vasylenko"})),(0,l.kt)("div",{className:"profile"},(0,l.kt)("h3",{className:"name"},"Вікторія Василенко"),(0,l.kt)("p",{className:"about"},"Вікторія працює в Binary Studio як Full stack developer після закінчення Binary Studio Academy в 2020."))),(0,l.kt)("div",{className:"bubble",style:{margin:"-0.5em 1em 1em"}},(0,l.kt)("strong",null,"Привіт!")," 👋",(0,l.kt)("br",null),"Вітаємо на лекції по Git. Тут ти знайдеш короткий конспект до лекції з основними Git командами та корисними посиланнями. Поїхали!")),(0,l.kt)("div",{id:"table-of-contents",className:"table-of-contents",style:{marginTop:"2em"}},(0,l.kt)("h2",null,(0,l.kt)("strong",null,"План лекції")),(0,l.kt)(i.Nv,{timeline:[{linkTo:"#setting-up-the-repository",title:"Налаштування репозиторію"},{linkTo:"#practicing-git",title:(0,l.kt)("span",null,"Основні ",(0,l.kt)("code",null,"git")," команди")},{linkTo:"#git-flow",title:"Git flow"},{linkTo:"#undo-changes",title:"Відмінити зміни"}],mdxType:"TimelineOfContents"})),(0,l.kt)(i.U1,{duration:"38m 2s",mdxType:"VideoWrapper"},(0,l.kt)("iframe",{src:"https://www.youtube.com/embed/HJ7NW6zatXo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,l.kt)(i.aC,{id:"setting-up-the-repository",number:"1",name:"Налаштування репозиторію",difficulty:"Beginner",objectives:"How to create and clone the repo",mdxType:"Level"}),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Перед тим як склонувати репозиторій вам потрібно буде налаштувати токен - PAT (personal access token) або SSH ключі.\nЦе може стати в нагоді -"),(0,l.kt)("a",{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},(0,l.kt)("strong",null,"How to set up PAT")),",",(0,l.kt)("a",{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},(0,l.kt)("strong",null,"How to set up SSH keys")),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Щоб склонувати репозиторій скористайся ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git clone")," командою + URL на репозиторій.  "),(0,l.kt)("p",{parentName:"li"},"За умови https це виглядатиме так:  "),(0,l.kt)("div",{parentName:"li",className:"gatsby-highlight","data-language":"text"},(0,l.kt)("pre",{parentName:"div",className:"language-text"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/<my-username>/homepage.git"))),(0,l.kt)("p",{parentName:"li"},"За умови SSH: "),(0,l.kt)("div",{parentName:"li",className:"gatsby-highlight","data-language":"text"},(0,l.kt)("pre",{parentName:"div",className:"language-text"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"git clone git@github.com:<my-username>/homepage.git")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Використовуй ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git remote show origin")," щоб переглянути посилання на віддалений репозиторій.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("code",{parentName:"p",className:"language-text"},"git status")," команда відобразить стан вашого репозиторію та staging area.\nВикористовуй дану команду, щоб перевірити, які файли додано в staging area та буде включено в коміт."))),(0,l.kt)(i.aC,{id:"practicing-git",number:"2",name:(0,l.kt)("span",null,"Основні ",(0,l.kt)("code",null,"git")," команди"),difficulty:"Beginner",objectives:"How to create commits and branches",mdxType:"Level"}),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Щоб додати файли до staging area використовуй ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git add")," команду + назва файлу.\nМожеш використовувати ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git add .")," команду, щоб додати ",(0,l.kt)("strong",null,"усі")," змінені та нові файли.  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Щоб створити коміт використовуй ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git commit")," команду. А щоб додати коміт з описом використай"),(0,l.kt)("div",{parentName:"li",className:"gatsby-highlight","data-language":"text"},(0,l.kt)("pre",{parentName:"div",className:"language-text"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},'git commit -m "Your message here"')))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Використовуй ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git branch")," команду, щоб переглянути локальні гілки та ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git checkout branch-name")," щоб перемкнутися на гілку.",(0,l.kt)("br",{parentName:"p"}),"\n","Щоб створити нову гілку та одразу перемкнутися на неї можеш скористатися ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git checkout -b branch-name")," командою.  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("code",{parentName:"p",className:"language-text"},"git log")," показує історію комітів на гілці.  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Щоб оновити віддалену гілку використовуй ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git push")," команду.\nЯкщо твоєї локальної гілки не існує на віддаленому репозиторій тобі потрібно буде ввести ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git push --set-upstream branch-name"),"\nабо скорочено ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git push -u branch-name"),",що означає те ж. Або ж ти можеш явно вказати, в яку remote гілку ти хочеш запушити свої зміни - ось так ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git push origin branch-name"),".  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Git stash зручний, якщо ви ще не готові закомітити свої зміни. ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git stash")," 'застешить' зміни, ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git stash list")," покаже усі доступні стегі,\nа ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git stash pop")," застосує останній стеш - поверне зміни назад.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Щоб переглянути зміни колег тобі знадобиться ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git fetch")," команда. ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git fetch")," завантажує\nкоміти, файли, нові гілки з віддаленого репозиторію до локального. Після цього ви можете захотіти\nзмерджити зміни віддаленої гілки в локальну (для цього є команда  ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git merge branch-name"),").\nАбо ж ви можете скористатися командою ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git pull"),", щоб завантажити зміни з remote репозиторію і змерджити в локальну гілку за один раз.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"У випадку якщо ви забули додати файли до останнього коміту або зробили помилку в описі ви можете скористатися командою ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git commit --ammend"),". "))),(0,l.kt)(i.aC,{id:"git-flow",number:"3",name:"Git flow",difficulty:"Intermediate",objectives:"How to create pull requests",mdxType:"Level"}),(0,l.kt)("p",null,"Існує рекомендаваний сценарій при роботі з репозиторієм:  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create branches - створювати окрему гілку на кожну таску/feature  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add commits - робити невеликі коміти з зрозумілими описами ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a Pull request - створювати pull requests для обговорення, перегляду та затвердження ваших змін")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Merge to the main branch - змерджити в головну гілку"))),(0,l.kt)(i.aC,{id:"undo-changes",number:"4",name:"Відмінити зміни",difficulty:"Hard",objectives:"How to revert or reset commits",mdxType:"Level"}),(0,l.kt)("p",null,"Є дві команди, щоб відмінити зміни: ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git revert")," та ",(0,l.kt)("code",{parentName:"p",className:"language-text"},"git reset"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("code",{parentName:"p",className:"language-text"},"git revert HEAD")," створює новий коміт поверх зі зворотніми змінами до останнього коміту.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("code",{parentName:"p",className:"language-text"},"git reset <commit>")," очищує історію комітів впритул до заданого."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-how-to-work-with-git-ua-index-mdx-91fdb076ed5f7d7b1ff0.js.map