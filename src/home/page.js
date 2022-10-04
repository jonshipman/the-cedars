import React from 'react';

import { GiWoodenSign, GiReceiveMoney, GiTrashCan } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Button from './../app/button';

export default function Home() {
	return (
		<section>
			<div className="wp-block-the-cedars-hero-image">
				<div className="flex items-center mv5">
					<div className="flex-l items-center-l">
						<div className="w-60-l pr4-l mb4 mb0-l">
							<div className="ttu tracked">
								The Cedars
								<span rol="img" aria-label="Picture of a tree.">
									🌲
								</span>
							</div>
							<div className="f1 f-5-l fw7 lh-solid mb3">
								a piece of paradise
							</div>
							<div className="post-content mid-gray">
								<div>
									<p>
										<strong>
											The Cedars is between Pflumm Road
											and Lackman Drive in the city of
											Lenexa, KS. The main entrance is
											located at 87th Street and Acuff
											Lane. There are 197 homes in the
											Cedars.
										</strong>
									</p>

									<div className="wp-block-the-cedars-button dib mr3">
										<Button href="/resources/By-Laws-Amended-and-Adopted-March-2017.pdf">
											By-Laws
										</Button>
									</div>

									<div className="wp-block-the-cedars-button dib">
										<Button
											href="/resources/CedarsCovs.pdf"
											inverted
										>
											Covenants
										</Button>
									</div>
								</div>
							</div>
						</div>
						<div className="w-40-l overflow-hidden br4 shadow-1 h5 h-auto-l animate__animated animate__slideInRight">
							<img
								src="/images/the-cedars.jpg"
								className="object-cover w-100 h-100 db"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="br4 bg-secondary pa4 overflow-hidden light-gray mv6">
				<div className="flex-l items-center-l nl3 nr3 nt3 nb3">
					<div className="w-third-l pa3">
						<div>
							<div className="w-50 center mw3 mb4">
								<div className="br-100 bg-near-white aspect-ratio aspect-ratio--1x1 lh-solid">
									<NavLink
										to="/budget-2022"
										className="flex items-center justify-center aspect-ratio--object "
									>
										<span className="db primary">
											<GiReceiveMoney size="2em" />
										</span>
									</NavLink>
								</div>
							</div>
							<div className="tc">
								<a
									href="/wp-content/uploads/2021/10/2022-proposal.pdf"
									className="no-underline"
								>
									<div className="fw7 f4 white">Budget</div>
									<div className="f5 moon-gray">
										Proposed 2022
									</div>
								</a>
							</div>
						</div>
					</div>

					<div className="w-third-l pa3">
						<div>
							<div className="w-50 center mw3 mb4">
								<div className="br-100 bg-near-white aspect-ratio aspect-ratio--1x1 lh-solid">
									<span className="flex items-center justify-center aspect-ratio--object ">
										<span className="db primary">
											<GiWoodenSign size="2em" />
										</span>
									</span>
								</div>
							</div>
							<div className="tc">
								<span className="no-underline">
									<div className="fw7 f4 white">
										Fall Yard Sale
									</div>
									<div className="f5 moon-gray">
										Sept 9-10
									</div>
								</span>
							</div>
						</div>
					</div>

					<div className="w-third-l pa3">
						<div>
							<div className="w-50 center mw3 mb4">
								<div className="br-100 bg-near-white aspect-ratio aspect-ratio--1x1 lh-solid">
									<a
										href="/info/#trash"
										className="flex items-center justify-center aspect-ratio--object"
									>
										<span className="db primary">
											<GiTrashCan size="2em" />
										</span>
									</a>
								</div>
							</div>
							<div className="tc">
								<a href="/info/#trash" className="no-underline">
									<div className="fw7 f4 white">
										Trash Pickup
									</div>
									<div className="f5 moon-gray">
										816-388-9739
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
