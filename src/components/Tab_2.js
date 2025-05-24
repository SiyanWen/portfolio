
import withTabBackground from './withTabBackground.js';
import Latex from './Latex.js';

function Tab_2() {
  return (
    <div >
        
        <ol style={{ margin: 0, padding: 0, listStylePosition: "inside" }}>
        <div style={{ padding: "20px" }}>
            <h1><li>SARSA and Q-learning</li></h1>
            <p>

                I implemented SARSA and Q-Learning using provided scaffold template.
                <br/>
                Here are some plots that show the directions of state value and Q value per direction of my SARSA and Q-Learning algorithm.
                <br/>
                I tested both algorithm from running map 6*8 on ε of 1.0, 0.1 and map 3*4 on ε 1.0.
                <br/>
                

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
            <p>The time cost (second) and result for SARSA and Q-Learning are as following.</p>
            <br/>
            <table >
                <tr>
                    <th ></th>
                    <th >SARSA</th>
                    <th >Q-learning</th>
                    
                </tr>
                <tr>
                    <td >6*8 (ε 1.0)</td>
                    <td >10.55, g</td>
                    <td >15.26, G</td>
                </tr>
                <tr>
                    <td >6*8 (ε 0.1)</td>
                    <td >8.87, g</td>
                    <td >10.63, G</td>
                </tr>
                <tr>
                    <td >3*4 (ε 1.0)</td>
                    <td >5.42, g</td>
                    <td >8.15, g</td>
                </tr>

            </table>
            <br/>
            <p>In general, the SARSA algorithm is more conservative, while Q-Learning assume it acts optimally. I think this is a little bit similar to teacher forcing in machine translation task.</p>
        </div>
        <br/>
        <div style={{ padding: "20px" }}>
            <h1><li>MLP Text Classification</li></h1>
            <p>I used MLP to carry out the task of classifying the text by author with mini-batch (100 epochs), SGD (50 epochs), Tensorflow mini-batch (100 epochs) and Tensorflow SGD (100 epochs). The result is as following.</p>
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
            <p>I used Skip-Gram and negative sampling to trained a embedding model for the word2vec task. The result is as following.</p>
            <p>After training, we can use knn to get closest words to the given word:
                <br/>
                "rose" is close to ['rose', 'sevigny', 'stevens', 'fiorentino', 'alexander', 'isabella', 'airhead', 'goldblum', 'joanna', 'curry']
                <br/>
                "lily" is close to ['lily', 'keyes', 'brenda', 'mchugh', 'eleanor', 'rachael', 'lucinda', 'paula', 'holt', 'theresa']
                <br/>
                "plane" is close to ['plane', 'helicopter', 'crashes', 'boat', 'stairs', 'warehouse', 'flight', 'ship', 'foot', 'bomb']
                <br/>
                "ship" is close to ['ship', 'boat', 'plane', 'ambulance', 'warehouse', 'jeep', 'train', 'water', 'keys', 'freighter']
                <br/>
                "car" is close to ['car', 'train', 'helicopter', 'gun', 'cars', 'truck', 'plane', 'chases', 'bus', 'baddies']
                <br/>
                "day" is close to ['day', 'weekend', 'rrie', 'future', 'week', 'wednesday', 'night', 'days', 'month', 'summer']
                <br/>
                "night" is close to ['night', 'morning', 'saturday', 'weekend', 'sunday', 'afternoon', 'nights', 'mornings', 'monday', 'summer']
                <br/>
                "house" is close to ['house', 'restaurant', 'apartment', 'bar', 'castle', 'kansas', 'cemetery', 'mansion', 'party', 'boarding']
                <br/>
                "love" is close to ['love', 'bermuda', 'hate', 'romance', 'romantic', 'pitka', 'squall', 'dream', 'asleep', 'goodyear']
                <br/>
                "hate" is close to ['hate', 'complain', 'gotta', 'agree', 'advise', 'encourage', 'cant', 'cares', 'dare', 'disagree']
            <br/>
            <span class="bold">Visualization:</span>
            <br/>
            <img 
            src="algo/center_vec.png"
            alt="spirited_away_theme_resort_1"
            style={{  width: "594px",height: "435px", padding: "10px" }}
            /></p>
            
        </div>

        <div style={{ padding: "20px" }}>
            <h1><li>Language Modeling</li></h1>
            <p>I used vanilla Bi-Gram, Bi-Gram with Good Turing Smoothing and Kneser Ney Smoothing to carry out a statistical Language Modeling and RNN Language Modeling.
                <br/>
                Here is the smoothed Bi-Gram Count, we can see when the frequence c  becomes infinitely large, the probability of the word approaches 0 smoothly due to I used a power law model <Latex>{"\\(N_c = a \\cdot c^b\\)"}</Latex> replaced the empirical Nc when c &gt; 100.
                <br/>
                <img 
            src="algo/lm_good_turing.png"
            alt="good_turing"
            style={{  width: "855px",height: "547px", padding: "10px" }}
            />
            <br/>
            The RNN model is implemented using tensorflow, with an embedding layer of dimension of 64, a hidden layer of 128 hidden units, and a dense layer of 1*vocab size.
            <br/>
            After 30 epochs of training with a batch size of 256,
            <br/>
            Train and Validation loss of RNN Model are as following:
            <br/>
            <img 
            src="algo/lm_rnn.png"
            alt="lm_rnn"
            style={{  width: "846px",height: "547px", padding: "10px" }}
            />
            <br/>
            Perplexity of each model:
            <br/>
            <table>
                <tr>
                    <th>Model</th>
                    <th>Perplexity</th>
                </tr>
                <tr>
                    <td>Bi-Gram</td>
                    <td>325.84</td>
                </tr>
                <tr>
                    <td>Good Turing</td>
                    <td>138.48</td>
                </tr>
                <tr>
                    <td>Kneser Ney</td>
                    <td>62.59</td>
                </tr>
                <tr>
                    <td>RNN</td>
                    <td>195.69</td>
                </tr>
            </table>
            <br/>
            Predict the next word given the previous word:
            <br/>
            <table>
                <tr>
                    
                    <th>Previous word</th>
                    <th>Bi-Gram</th>
                    <th>Good Turing</th>
                    <th>Kneser Ney</th>
                    <th>RNN</th>
                </tr>
                <tr>
                    <td>sharply falling stock prices do reduce consumer wealth damage business ____</td>
                    <td>&lt; /s &gt;</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; /s &gt;</td>
                    <td>to</td>
                </tr>
                <tr>
                    <td>but robert an official of the association said no ____</td>
                    <td>longer</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; /s &gt;</td>
                    <td>&lt; /s &gt;</td>
                </tr>
                <tr>
                    <td>it also has interests in military electronics and marine ____</td>
                    <td>s</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; /s &gt;</td>
                    <td>&lt; /s &gt;</td>
                </tr>
                <tr>
                    <td>first chicago since n has reduced its loans to such ____</td>
                    <td>traders</td>
                    <td>&lt; pad &gt;</td>
                    <td>as</td>
                    <td>a</td>
                </tr>
                <tr>
                    <td>david m jones vice president at g ____</td>
                    <td>the</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; /s &gt;</td>
                    <td>s</td>
                </tr>
                <tr>
                    <td>the n stock specialist firms on the big board floor ____</td>
                    <td>n</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; /s &gt;</td>
                    <td>as</td>
                </tr>
                <tr>
                    <td>at the same time the business was hurt by ____</td>
                    <td>services</td>
                    <td>&lt; pad &gt;</td>
                    <td>the</td>
                    <td>the</td>
                </tr>
                <tr>
                    <td>salomon will cover the warrants by buying sufficient shares or ____</td>
                    <td>of</td>
                    <td>&lt; pad &gt;</td>
                    <td>n</td>
                    <td>the</td>
                </tr>
                <tr>
                    <td>in july southmark corp the dallas based real estate and financial ____</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; /s &gt;</td>
                    <td>services</td>
                </tr>
                <tr>
                    <td>he concluded his remarks by and at some ____</td>
                    <td>&lt; pad &gt;</td>
                    <td>&lt; pad &gt;</td>
                    <td>of</td>
                    <td>of</td>
                </tr>
            </table>
            </p>
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
            <p>
                I trained a RNN seq2seq model with a batch size of 256, 8 epochs, learning_rate  1e-3. In both Encoder and Decoder it has an embedding layer of dimension of 128 . Then it has a GRU layer, the hidden units of GRU is 256. In Decoder, it has a dense layer of 1*vocab size. <br/>The Attention adds another 3 trainable matrix W1, W2 and V.
                <br/>
                The RNN+Attention model wasn't succesfully trained due to the limitation of memory of Colab.
                <br/>
                I have to reduce the batch size of 256 to 64, or average the losses every four times after calculating the losses, do gradient descent and update model's weights. <br/>Meanwhile, although putting training sentences with similar length into the same batch can save computational time, however perhaps due to the reduction of randomness, it also leads to problems such as unstable gradient descent  and a slower convergence speed.
            
            <br/>
            <img 
            src="algo/translate_4.png"
            alt="sew2seq_model_parameters"
            style={{  width: "554px",height: "455px", padding: "10px" }}
            />
            <br/>
                The model parameters are as following (without attention, without sorted sentence length):
                <br/>
            </p>
            <img 
            src="algo/translate_3.png"
            alt="sew2seq_model_parameters"
            style={{  width: "896px",height: "528px", padding: "10px" }}
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
                BLEU score: 7.39.
                <br/>
                Translation results of 10 sentences:
                <br/>
                <ol>
                <li></li>
                French: Et l'idée est plutôt simple. Des équipes de quatre personnes doivent bâtir la plus haute structure tenant debout avec 20 spaghettis, un mètre de ruban collant, un mètre de ficelle, et un marshmallow.
                
                <br/>
                English: And the idea's pretty simple:  Teams of four have to build the tallest free-standing structure  out of 20 sticks of spaghetti,  one yard of tape, one yard of string  and a marshmallow.
                <br/>
                Translation: and the idea is, if you can do a different map of the world, the first time, the hundreds of thousands of miles of the earth, the first time, the one of the four-mile-s-green-a-half-hours.
                <br/><br/><li></li>
                French: Le marshmallow doit être placé au sommet.
                <br/>
                English: The marshmallow has to be on top.
                <br/>
                Translation: the third of the people who are going to call the earth.
                <br/><br/><li></li>
                French: Bien que cela semble vraiment simple, c'est en fait plutôt difficile, parce que ça oblige les gens à collaborer rapidement.
                <br/>
                English: And, though it seems really simple, it's actually pretty hard  because it forces people  to collaborate very quickly.
                <br/>
                Translation: because it's really easy to think about it, but it's really hard to find out how to do these things.
                <br/><br/><li></li>
                French: J'ai trouvé que c'était une idée intéressante, alors je l'ai insérée dans un atelier de conception.
                <br/>
                English: And so, I thought this was an interesting idea,  and I incorporated it into a design workshop.
                <br/>
                Translation: i thought i was a really interesting idea, a new way of a group.
                <br/><br/><li></li>
                French: Et ça a été un grand succès.
                <br/>
                English: And it was a huge success.
                <br/>
                Translation: and it was a great success.
                <br/><br/><li></li>
                French: Depuis, j'ai dirigé environ 70 ateliers de conception dans le monde entier, avec des étudiants, des designers et des architectes, et même les Directeurs Techniques d'entreprises du Fortune 50, et il y a quelque chose dans cet exercice qui révèle de profonds enseignements sur la nature de la collaboration, et j'aimerais en partager certains avec vous.
                <br/>
                English: And since then, I've conducted  about 70 design workshops across the world  with students and designers and architects,  even the CTOs of the Fortune 50,  and there's something about this exercise  that reveals very deep lessons  about the nature of collaboration,  and I'd like to share some of them with you.
                <br/>
                Translation: and i spent a lot of the time in the u.s. and in the new york, the most successful community, the engineers who have been working on the internet, and so on the way, to create a new way of the people and the other things that are being used to be, and the way that we're going to work together.
                <br/><br/><li></li>
                French: Bon, normalement la plupart des gens commencent par prendre leurs marques par rapport à la tâche.
                <br/>
                English: So, normally, most people begin  by orienting themselves to the task.
                <br/>
                Translation: well, even people are even more people in the lab, to make a difference.
                <br/><br/><li></li>
                French: Ils en parlent, ils cherchent à quoi ça va ressembler, ils manoeuvrent pour le pouvoir,
                <br/>
                English: They talk about it, they figure out what it's going to look like,  they jockey for power.
                <br/>
                Translation: they're like, "you know what they want to do, they're going to be able to look at the same animal.
                <br/><br/><li></li>
                French: et puis ils passent un peu de temps à planifier, à organiser. Ils font des croquis, et disposent les spaghettis.
                <br/>
                English: Then they spend some time planning, organizing,  they sketch and they lay out spaghetti.
                <br/>
                Translation: and then they're a little bit of a group of people, and they're doing it, and they're very sensitive to the local.
                <br/><br/><li></li>
                French: Ils passent la majeure partie de leur temps à assembler les bâtons en structures de plus en plus grandes,
                <br/>
                English: They spend the majority of their time  assembling the sticks into ever-growing structures.
                <br/>
                Translation: they're also using the same time to build the animals in the same way.
                </ol>
                
            </p>
        </div>
        <div style={{ padding: "20px" }}>
            <h1><li>Presidental election prediction project</li></h1>
            <p>
                Work Flow:
                <br/>
                <img 
                src="algo/presidental_1.png"
                alt="Work flow"
                style={{  width: "640px",height: "652px", padding: "10px" }}
                />
                <br/>
                I built a bagging (voting) model to leverage financial data, TF-IDF and Sentiment Analysis of presidental debate to predict the result of U.S. presidental election.
                <br/>
                Traditional sentiment analysis is focused on voter side, such as posts from Social Network or polling data collected from survey.
                <br/>
                However it has several limitations:
                <br/>
                <ul>
                    <li>Collecting polling data is expensive</li>
                    <li>polling data might not reflect people's true choices</li>
                    <li>Fake tweets</li>
                    <li>Manipulation and bots</li>
                    <li>Low Literacy in less developed country</li>
                    <li>Social medias that are popular currently may not exist several years ago (Twitter was founded in 2006), and thus lack consistant long-term training data</li>
                </ul>
                
                But in U.S.,the audio and transcripts of the presidential election television debates that emerged since 1960 have been relatively well-preserved, and no one has yet explored the transcripts (one of the informative and strategy-rich natural language materials).
                <br/>
                Therefore, I built a model to predict the result of U.S. presidental election by leveraging financial data, TF-IDF and Sentiment Analysis of presidental debate.
                But the model actually behaves better without financial data, so I didn't use financial data at end.
                <br/>
                Final work flow:
                <br/>
                <img 
                src="algo/presidental_5.png"
                alt="Final work flow"
                style={{  width: "640px",height: "759px", padding: "10px" }}
                />
                <br/>
                
                The result is as following:
                <br/>
                Confusion Matrix:
                <br/>
            </p>
            
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
                <p>Leave-One-Out evaluation result (without future training samples):</p>
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
            <a href="https://drive.google.com/file/d/19SRLpJ7n6t5GAqOZcxSum0QkztgI_4kr/view?usp=sharing" target="_blank" rel="noopener noreferrer">My PDF Report</a>
        </div>
        </ol>
        
    </div>
  );
}

export default withTabBackground(Tab_2,  'background.jpg');