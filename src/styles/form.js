import styled from 'styled-components';
import {size} from '../breakpoints';

export const Form = styled.div`

    flex: 0.4;
    margin-top: -2rem;

    &> header { 
        h1 {
            font-weight: 300;
            font-size: 2.5rem;
        }
        p {
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.5;

            #bellIcon {
                color: yellow;
            }
        }
    
    }

    &> .container {
        form {
            display: flex;
            height: 3rem;
            width: 24rem;
            gap: 1rem;
            padding-left: 1rem;
            border-radius: 3px;
            margin-bottom: 1rem;
            outline: none;
            background: #f5f5f5;

            div {
                margin: 15px 5px;
                color: gray;
            }

            input {
                border: none;
                outline: none;
                background: #f5f5f5;
                height: 2.8rem;
                width: 18rem;
            }
        }

        // rem_forg styling next

        &> .rem_forg {
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            color: gray;


            .rem {
                display: flex;
                align-items: center;
                gap: 10px;      
            }

            .forg {
                margin-left: 5.5rem;
            }
        }

        &> .logacct {
            display: flex;
            gap: 1.5rem;
            margin-top: 1rem;

            button {
                height: 2.5rem;
                width: 8rem;
                text-align: center;
                border-radius: 20px;
                outline: none;
                border-style: none;
                color: #000;
                font-weight: 600;
            }

            button:hover {
                background: #3388ff;
                color: #fff;
            }

          
        }

        &> .options {
            margin-top: 2rem;

            p {
                color: gray;
            }
            
            .media_logins {
                display: flex;
                align-items: center;
                gap: 15px; 

                div {
                    height: 20px;
                    width: 30px;
                    border-radius: 80px;
                    text-align: center;
                    padding-top: 5px;
                    color: #fff;
                }
            }
        }   
    }

    @media screen and (max-width: ${size.mobileS}) {
        // rem_forg styling next

        &> .rem_forg {
            display: flex;
            align-items: center;
            font-size: 4px;
            color: gray;


            .rem {
                display: flex;
                align-items: center;
                gap: 10px;      
            }

            .forg {
                margin-left: 3.5rem;
            }
        }
    } 
@media screen and (max-width: ${size.mobileL}) {
    margin: 3rem 3rem;
    
    &> header { 
        h1 {
            font-weight: 300;
            font-size: 1.3rem;
        }
        p {
            font-weight: 600;
            font-size: 0.8rem;
            line-height: 1.5;

            #bellIcon {
                color: yellow;
            }
        }
    
    }

    &> .container {
        form {
            display: flex;
            align-items: center;
            height: 3rem;
            width: 18rem;
            gap: 1rem;
            padding-left: 1rem;
            border-radius: 3px;
            margin-bottom: 1rem;
            outline: none;
            background: #f5f5f5;

            // div {
            //     margin: 15px 5px;
            //     color: gray;
            // }

          //  input {
             //   border: none;
             //   outline: none;
             //   background: #f5f5f5;
          
         //   }
        }

        // rem_forg styling next

        &> .rem_forg {
            display: flex;
            align-items: center;
            width: fit-content;
            font-size: 0.8rem;
            color: gray;


            .rem {
                display: flex;
                align-items: center;
                gap: 10px;      
            }

            .forg {
                margin-left: 5.5rem;
            }
        }

        &> .logacct {
            display: flex;
            gap: 1.5rem;
            margin-top: 1rem;

            button {
                height: 2.5rem;
                width: 8rem;
                text-align: center;
                border-radius: 20px;
                outline: none;
                border-style: none;
                color: #000;
            }

            button:hover {
                background: #3388ff;
                color: #fff;
            }

          
        }

        &> .options {
            margin-top: 2rem;

            p {
                color: gray;
            }
            
            .media_logins {
                display: flex;
                align-items: center;
                gap: 15px; 

                div {
                    height: 20px;
                    width: 30px;
                    border-radius: 80px;
                    text-align: center;
                    padding-top: 5px;
                    color: #fff;
                }
            }
        }   
    }



}


`
