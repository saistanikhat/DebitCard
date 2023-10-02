import React, {useState} from "react"
import "./DebitCard.css"
import cards from "../../cards.json"
export const DebitCard = () => {
	const [isCardClicked, setIsCardClicked] = useState(false);
	const [cardIndex, setCardIndex] = useState(1);
	const [cardDetail, setCardDetail] = useState({});
	
	const onCardIndexClicked = (index) => {
		setCardIndex(index);
	}

	const onCardBodyClicked = () => {
		setIsCardClicked(!isCardClicked);
		setCardDetail(cards[cardIndex]);
	}


	return (
		<div className="mt-50 layout-column justify-content-center align-items-center" >
			<div className="card outlined" style={{ width: '1000px' }}>
					<div data-testid="debit-card">
						<h3 style={{ textAlign: 'center' }}>Card Details</h3>
						<br />
                            {/*
                                Display Card Details here
                            */}
							{isCardClicked ? (
								<div className="debit-card-body" data-testid="debit-card-body" onClick={onCardBodyClicked}>
								<p className="debit-card-bank" data-testid="debit-card-bank-name">{cardDetail.bank}</p>
								<p className="debit-card-no" data-testid="debit-card-no">{cardDetail.number}</p>
								<br />
								<div style={{ height: '45px', backgroundColor: 'black' }} className="debit-card-stripe"></div>
								<p>
									<span className="debit-card-holder-name" data-testid="debit-card-holder-name">{cardDetail.name}</span>
									<span className="debit-card-date" data-testid="debit-card-expiry-date">{cardDetail.expiry}</span>
									<span className="debit-card-cvv" data-testid="debit-card-cvv">{cardDetail.cvv}</span></p>
							</div>
							) : (
								<div className="debit-card-body" data-testid="debit-card-body" onClick={onCardBodyClicked}>
							<p className="debit-card-bank" data-testid="debit-card-bank-name">Bank Name</p>
							<p className="debit-card-no" data-testid="debit-card-no">XXXX XXXX XXXX XXXX</p>
							<br />
							<div style={{ height: '45px', backgroundColor: 'black' }} className="debit-card-stripe"></div>
							<p>
								<span className="debit-card-holder-name" data-testid="debit-card-holder-name">HOLDER NAME</span>
								<span className="debit-card-date" data-testid="debit-card-expiry-date">MM/YY</span>
								<span className="debit-card-cvv" data-testid="debit-card-cvv">CVV</span></p>
						</div>
							)}
						
					</div>
				<div>
					<h3 style={{ textAlign: "center" }}>Cards List</h3>
					<div className="debit-card-list" data-testid="debit-card-list">
                        {/*
                            Render the card list of all 6 cards imported from Cards.json here.
                        */}
						<div className="list-card" data-testid="list-card-1" onClick={()=>onCardIndexClicked('1')}><p className="list-card-title">Card 1</p></div>
						<div className="list-card" data-testid="list-card-2" onClick={()=>onCardIndexClicked('2')}><p className="list-card-title">Card 2</p></div>
						<div className="list-card" data-testid="list-card-3" onClick={()=>onCardIndexClicked('3')}><p className="list-card-title">Card 3</p></div>
						<div className="list-card" data-testid="list-card-4" onClick={()=>onCardIndexClicked('4')}><p className="list-card-title">Card 4</p></div>
						<div className="list-card" data-testid="list-card-5" onClick={()=>onCardIndexClicked('5')}><p className="list-card-title">Card 5</p></div>
						<div className="list-card" data-testid="list-card-6" onClick={()=>onCardIndexClicked('6')}><p className="list-card-title">Card 6</p></div>



					</div>
				</div>
			</div>
		</div>
	)
}