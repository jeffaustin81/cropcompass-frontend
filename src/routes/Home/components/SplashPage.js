import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Modal, Button } from "react-bootstrap"

class SplashPage extends React.Component {

render(){
  let {showJournalism, toggleJournalism} = this.props
  return(
    <div>
        <img style={{position: 'fixed', zIndex: '-1', height:"100%", width:"100%"}} src='../../sweet_onions.jpg'/>
        <div style={{position: "absolute", top: "5%", left: "25%", zIndex: '5', textAlign: "center"}}>
          <img src="../../CC-logo.png" alt="CropCompass logo" width="300" height="150" />
          <div style={{marginTop: "10%"}}>
          <span onClick={toggleJournalism}><a><h1 style={{color: 'white', textDecoration: 'none !important'}}>show me a journalism</h1></a></span>
          <span> <Link to='data'><h1 style={{color: 'white', textDecoration: 'none !important',}}>actually i just want to do vegetable numbers</h1></Link></span>
          </div>
        </div>


        				<Modal show={showJournalism} bsSize="large" aria-labelledby="contained-modal-title-lg">
        			<Modal.Header>
        				<Modal.Title id="contained-modal-title-lg">A story for you!</Modal.Title>
        			</Modal.Header>
        			<Modal.Body>
              <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>

              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>

              <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>

              <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.</p>

              <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>

              <p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</p>

              <p>Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.</p>

              <p>Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. JÃ­cama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.</p>
                            <span onClick={toggleJournalism}><Link to='data'>are you ready for data?</Link></span>

        			</Modal.Body>
        			<Modal.Footer>
        				<Button bsSize="large success" onClick={toggleJournalism}>Close</Button>

        			</Modal.Footer>
        		</Modal>



    </div>
    )
  }
}


const mapStateToProps = (state) => {
	    return {
        showJournalism: state.showJournalism
        }
}


const toggleJournalism = () => {
  return {type: 'TOGGLE_JOURNALISM'}
}
export default connect(mapStateToProps,
        {toggleJournalism})(SplashPage)
