


function Tab_2() {
  return (
    <div  style={{  width: "100vw",
    minHeight: "100vh",
    backgroundImage: "url('background.jpg')",
    backgroundColor: "rgba(255,255,255,0.8)",
    backgroundBlendMode: "lighten",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"}}>
        
        <ol style={{ margin: 0, padding: 0, listStylePosition: "inside" }}>
        <div style={{ padding: "20px" }}>
            <h1><li>SARSA and Q-learning</li></h1>
            <p>

                I implemented SARSA and Q-Learning using provided scaffold template.
                <br/>
                Here are some plots that show the directions of state value and Q value per direction of my SARSA and Q-Learning algorithm.
                <br/>
                I tested both algorithm from running map 6*8 on ε of 1.0, 0.1 and map 3*4 on ε 1.0.

            </p>
            <br/>
            <img 
            src="algo/6_8_10.png"
            alt="sarsa_1"
            style={{ width: "900px", height: "736px", padding: "10px" }}
            />
           <br/>
            <p>For map of size 6*8, ε = 1.0, SARSA satisfied on 'village', but Q-Learning can goes to the scenery. This indicates Q-Learning is an off-policy algorithm and it aims to get the highest reward. SARSA is an on-policy algorithm, so it is more emphasized on avoiding risks.</p>
            <br/>
            <img 
            src="algo/6_8_01.png"
            alt="sarsa_2"
            style={{ width: "900px", height: "736px", padding: "10px" }}
            />
            <br/>
            <p>When Epsilon (ε) becomes  0.1 from 1.0 the scope of exploration of both algorithm becomes smaller. That's because when  the starting exploration probability was low, they  do not have enough opportunity to explore, but only select the best steps each time, so the area of exploration is smaller and more likely to stuck in local optimal. 
            <br/><br/>
            Running on 3*4map always goes to village since it is harder to bypass the volcano through the narrow space. 
            </p>
            <br/>
            <img 
            src="algo/3_4_1_0.png"
            alt="sarsa_3"
            style={{ width: "900px", height: "736px", padding: "10px" }}
            />
            <br/>
            <p>The time cost (second) for SARSA and Q-Learning are as following.</p>
            <br/>
            <table >
                <tr>
                    <th ></th>
                    <th >SARSA</th>
                    <th >Q-learning</th>
                    
                </tr>
                <tr>
                    <td >6*8 (ε 1.0)</td>
                    <td >10.55</td>
                    <td >15.26</td>
                </tr>
                <tr>
                    <td >6*8 (ε 0.1)</td>
                    <td >8.87</td>
                    <td >10.63</td>
                </tr>
                <tr>
                    <td >3*4 (ε 1.0)</td>
                    <td >5.42</td>
                    <td >8.15</td>
                </tr>

            </table>
            <br/>
            <p>In general, the SARSA algorithm follows the real trajectory, while Q-Learning assume it acts optimally, this may cause it take longer to train. But this also enables it to to get higher average reward than SARSA. SARSA may performs well when there is a need to avoid risks, because it always play it safe. Q-Learning may be good at  finding long paths on big maps.</p>
        </div>
        <br/>
        <div style={{ padding: "20px" }}>
            <h1><li>MLP Language Modeling</li></h1>
            <p>I used MLP to carry out the task of classifying the text by author with mini-batch (100 epoch), SGD (50 epoch), Tensorflow mini-batch. The result is as following.</p>
            <h4>Time cost:</h4>
            <table >
                <tr>
                    <th></th>
                    <th>manual mini-batch</th>
                    <th>manual SGD</th>
                    <th>Tensorflow mini-batch</th>
                    <th>Tensorflow SGD</th>
                </tr>
                <tr>
                    <td>Time</td>
                    <td>1523</td>
                    <td>17634</td>
                    <td>95</td>
                    <td>205</td>
                </tr>
                <tr>
                    <td>Accuracy</td>
                    <td>0.911</td>
                    <td>0.889</td>
                    <td>0.908</td>
                    <td>0.907</td>
                </tr>
            </table>
            <p>Train loss of 4 models:</p>
            <br/>
            
            <br/>
            <img 
            src="algo/skip_gram_train_loss.png"
            alt="skip_gram_train_loss"
            style={{  width: "383px",height: "316px", padding: "10px" }}
            />
            <br/>
            <p>Validation Accuracy and F1:</p>
            <br/>
            <img 
            src="algo/skip_gram_val.png"
            alt="skip_gram_val"
            style={{  width: "674px",height: "316px", padding: "10px" }}
            />

            <p>Train loss of manual mini-batch and SGD models:</p>
            <br/>
            <img 
            src="algo/manual_train_loss.png"
            alt="manual_train_loss"
            style={{  width: "672px",height: "316px", padding: "10px" }}
            />
            <br/>
            <p>Train loss of ensorflow mini-batch and SGD models:</p>
            <img 
            src="algo/tf_train_loss.png"
            alt="tf_train_loss"
            style={{  width: "672px",height: "316px", padding: "10px" }}
            />
            <br/>
            
            
            <p>
                The gap between validation loss and train loss of my mini-batch model and Tensorflow SGD model are getting bigger, indicating they are overfitting.
                <br/>
                SGD should be faster than GD and mini-batch on large dataset, but because the manual SGD doesn't have optimization of the for loop, and the function calls of back propogation and weight update of each data point make it very time consuming, I have to under-sample the train set.
                <br/>
                Because the manual SGD has much smaller training loss compare to valid loss, I decreased the hidden dimention to reduce model complexity and used smaller epoch number to prevent overfitting.
            </p>
        </div>
        <div style={{ padding: "20px" }}>
            <h1><li>Word2Vec</li></h1>
            <p>I used Skip-Gram to train the model with mini-batch (100 epoch), SGD (50 epoch), Tensorflow mini-batch. The result is as following.</p>
            <p>After training, we can use knn to get closest word to given word:
                <br/>
                Closest words to "movie" is ['movie', 'film', 'flick', 'stinker', 'sequel', 'movies', 'programmes', 'sequels', 'documentary', 'miniseries']
                <br/>
            "film" : ['film', 'movie', 'documentary', 'films', 'cinema', 'picture', 'flick', 'masterpiece', 'miniseries', 'gem']
            <br/>
            "story" : ['story', 'storyline', 'premise', 'plot', 'idea', 'stories', 'concept', 'arc', 'narrative', 'script']
            <br/>
            "good" : ['good', 'great', 'fine', 'decent', 'solid', 'excellent', 'fantastic', 'terrific', 'wonderful', 'nice']
            <br/>
            "enjoyable" : ['enjoyable', 'entertaining', 'watchable', 'disappointing', 'engaging', 'mediocre', 'compelling', 'amusing', 'talky', 'campy']
            <br/>
            "great" : ['great', 'good', 'amazing', 'incredible', 'wonderful', 'excellent', 'fantastic', 'brilliant', 'fine', 'terrific']
            <br/>
            "bad" : ['bad', 'horrible', 'terrible', 'awful', 'lousy', 'stupid', 'poor', 'lame', 'atrocious', 'horrendous']
            <br/>
            "coffee" : ['coffee', 'beer', 'dust', 'lunch', 'wine', 'bottles', 'smashed', 'liquor', 'laying', 'drink']
            <br/>
            "tea" : ['tea', 'coffee', 'your', 'wine', 'ur', 'lick', 'beer', 'wet', 'rub', 'gods']
            <br/>
            "milk" : ['milk', 'wine', 'wet', 'dive', 'drink', 'tub', 'whiskey', 'lunch', 'beer', 'vodka']
            <br/>
            Visualization:
            <br/>
            <img 
            src="algo/center_vec.png"
            alt="spirited_away_theme_resort_1"
            style={{  width: "594px",height: "435px", padding: "10px" }}
            /></p>
            
        </div>
        <div style={{ padding: "20px" }}>
            <h1><li>Seq2seq model (machine translation)</li></h1>
            <p>Train loss per batch:</p>
            <br/>
            <img 
            src="algo/translate_2.png"
            alt="train_loss_per_batch"
            style={{  width: "554px",height: "455px", padding: "10px" }}
            />
            <br/>
            <p>Train loss and validation loss per epoch:</p>
            <br/>
            <img 
            src="algo/translate.png"
            alt="translate_loss"
            style={{  width: "567px",height: "455px", padding: "10px" }}
            />
            <p>
                BLEU score: 7.39
                <br/>
                
                French: "Et l'idée est plutôt simple. Des équipes de quatre personnes doivent bâtir la plus haute structure tenant debout avec 20 spaghettis, un mètre de ruban collant, un mètre de ficelle, et un marshmallow."
                <br/>
                English: "And the idea's pretty simple:  Teams of four have to build the tallest free-standing structure  out of 20 sticks of spaghetti,  one yard of tape, one yard of string  and a marshmallow."
                <br/>
                Translation: "and the idea is, if you can do a different map of the world, the first time, the hundreds of thousands of miles of the earth, the first time, the one of the four-mile-s-green-a-half-hours."
                <br/><br/>
                French: 'Le marshmallow doit être placé au sommet.'
                <br/>
                English: 'The marshmallow has to be on top.'
                <br/>
                Translation: the third of the people who are going to call the earth.
                <br/><br/>
                French: "Bien que cela semble vraiment simple, c'est en fait plutôt difficile, parce que ça oblige les gens à collaborer rapidement."
                <br/>
                English: "And, though it seems really simple, it's actually pretty hard  because it forces people  to collaborate very quickly."
                <br/>
                Translation: because it's really easy to think about it, but it's really hard to find out how to do these things.
                <br/><br/>
                French: "J'ai trouvé que c'était une idée intéressante, alors je l'ai insérée dans un atelier de conception."
                <br/>
                English: 'And so, I thought this was an interesting idea,  and I incorporated it into a design workshop.'
                <br/>
                Translation: i thought i was a really interesting idea, a new way of a group.
                <br/><br/>
                French: 'Et ça a été un grand succès.'
                <br/>
                English: 'And it was a huge success.'
                <br/>
                Translation: and it was a great success.
                <br/><br/>
                French: "Depuis, j'ai dirigé environ 70 ateliers de conception dans le monde entier, avec des étudiants, des designers et des architectes, et même les Directeurs Techniques d'entreprises du Fortune 50, et il y a quelque chose dans cet exercice qui révèle de profonds enseignements sur la nature de la collaboration, et j'aimerais en partager certains avec vous."
                <br/>
                English: "And since then, I've conducted  about 70 design workshops across the world  with students and designers and architects,  even the CTOs of the Fortune 50,  and there's something about this exercise  that reveals very deep lessons  about the nature of collaboration,  and I'd like to share some of them with you."
                <br/>
                Translation: and i spent a lot of the time in the u.s. and in the new york, the most successful community, the engineers who have been working on the internet, and so on the way, to create a new way of the people and the other things that are being used to be, and the way that we're going to work together.
                <br/><br/>
                French: 'Bon, normalement la plupart des gens commencent par prendre leurs marques par rapport à la tâche.'
                <br/>
                English: 'So, normally, most people begin  by orienting themselves to the task.'
                <br/>
                Translation: well, even people are even more people in the lab, to make a difference.
                <br/><br/>
                French: 'Ils en parlent, ils cherchent à quoi ça va ressembler, ils manoeuvrent pour le pouvoir,'
                <br/>
                English: "They talk about it, they figure out what it's going to look like,  they jockey for power."
                <br/>
                Translation: they're like, "you know what they want to do, they're going to be able to look at the same animal.
                <br/><br/>
                French: 'et puis ils passent un peu de temps à planifier, à organiser. Ils font des croquis, et disposent les spaghettis.'
                <br/>
                English: 'Then they spend some time planning, organizing,  they sketch and they lay out spaghetti.'
                <br/>
                Translation: and then they're a little bit of a group of people, and they're doing it, and they're very sensitive to the local.
            </p>

        </div>
        <div style={{ padding: "20px" }}>
            <h1><li>Presidental election prediction project</li></h1>
            <p>Work Flow:
                <img 
                src="algo/presidental_1.png"
                alt="presidental_1"
                style={{  width: "596px",height: "442px", padding: "10px" }}
                />
                <br/>
                I built a bagging model to leverage finantial data, TF-IDF  and semantc analysis of presidental debate.
                <br/>
                But the model actually behaves better without financial data, so I didn't use funantial data at end.
                <br/>
                The result is as following:
                <br/>
                Confusion Matrix:
                <br/>
            </p>
            <br/>
            <div >
                <img 
                src="algo/presidental_2.png"
                alt="spirited_away_theme_resort_1"
                style={{  width: "535px",height: "455px", padding: "10px" }}
                />
                <br/>
                <img 
                src="algo/presidental_3.png"
                alt="spirited_away_theme_resort_1"
                style={{  width: "398px",height: "149px", padding: "10px" }}
                />
                <br/>
                <p>Leave-One-Out evaluation result:</p>
                <br/>
                <img 
                src="algo/presidental_4.png"
                alt="spirited_away_theme_resort_1"
                style={{  width: "270px",height: "293px", padding: "10px" }}
                />
                <br/>

            </div>
            <p>Video introduction:</p>
            <video width="20%"   controls>
                <source src="./algo/Project_Video_Siyan_Wen.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <br/>
            <a href="https://drive.google.com/file/d/19SRLpJ7n6t5GAqOZcxSum0QkztgI_4kr/view?usp=sharing" target="_blank" rel="noopener noreferrer">PDF Report</a>
        </div>
        </ol>
        
    </div>
  );
}

export default Tab_2;