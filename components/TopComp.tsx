

export default function TopComp() {
    
        const imgs = ['/images/profile.jpg', '/images/profile02.jpg', '/images/profile01.jpg']

    return (
      <>
            <div className="">
                {
                    imgs.map((im, i) => (
                        <div>
                            
                        </div>
                    ))
                }
            </div>
      </>
    )
  }