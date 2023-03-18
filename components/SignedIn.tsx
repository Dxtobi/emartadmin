

export default function SignedIn(params: { user: any }) {
    const {user} = params
    return (
      <>
            <div className="">
                <div className="text-gray-500 hero-text brand">
                    <h4 >Hi</h4>
                    <h1 className="text-gray-800">{ user.name}</h1>
                    <div>You Already Created Beautiful <span className="text-gray-800">Cards.</span></div>
                </div>
                <br/>
                <h2>
                    You can shear your card with the link bellow,
                    click on the edit button to edit your info.
                </h2>
            </div>
      </>
    )
  }