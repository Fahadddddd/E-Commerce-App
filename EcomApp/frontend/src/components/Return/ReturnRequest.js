
import React, { useContext, useState, useEffect } from 'react';
import './ReturnRequest.css';
import Header from '../Header/header';
import Footer from '../Footer/Footer';

const ReturnRequest = () => {
    const [orderNo, setorderNo] = useState('');
    const [phone, setPhone] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestBody = {
            orderNo,
            phone: parseInt(phone),
            
        };
        
    
        try {
          const response = await fetch('https://yusii-backend.onrender.com/api/return', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
    
          const result = await response.json();
    
          if (response.ok) {
          alert("Return Initiated Successfully");
        
         
        } else {
          alert(result.message);
          setResponseMessage(`Error: ${result.message}`);
        }
      } catch (error) {
        setResponseMessage(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    
      };
    

    return (
        <>
       
        <Header/>
        <div className="return-request-container">
            <div className="return-request">
                <h2>Product Return Request</h2>
                <p>Enter your order number and Email or Phone to find your order</p>
                <input type="text" placeholder="Order Number" value={orderNo} onChange={(e) => setorderNo(e.target.value)} />
                <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button>Request Return</button>
                <p className="upload-instructions">
                    Please upload the product images where the brand tag is clearly visible to avoid any rejection of your return request.
                    50 INR logistic charges will be deducted as a part of the refund process.
                </p>
                {/* <p className="secured-by">Secured by <span className="return-prime">Return Prime</span></p> */}
            </div>
            <footer className="footer">
                <div className="footer-item">
                    <img src="https://w7.pngwing.com/pngs/872/699/png-transparent-computer-icons-delivery-symbol-symbol-miscellaneous-angle-freight-transport-thumbnail.png" alt="Delivery" />
                    <h3>FREE & FAST DELIVERY</h3>
                    <p>Shipping within 48 hours across India.</p>
                </div>
                <div className="footer-item">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACUCAMAAABCx6fPAAAAh1BMVEX///8AAADm5ubl5eXk5OTj4+Pw8PD7+/v6+vr+/v719fXt7e309PTo6Oj8/Pzq6ur29vb39/f5+fnn5+fx8fHp6env7+9dXV14eHgpKSmmpqZ+fn7W1tY0NDTDw8MuLi6ZmZm6urpAQEDMzMxnZ2cbGxtNTU1vb2+wsLAiIiKMjIwLCwtVVVXN2DtwAAAbDUlEQVR4nNVd6WKbPLPGSOw7Atomjps0b9uk7f1f35lNmNV74u/wI1Y0SDyWhTS7HAeuRLkqwYJyXZXCZ+W5bhZBoVGuRkreuq6JoRBqVxWB40Q+tOmwooBCDYXSZYrTQUUDjYMMGldQERtojL11rqt9+Iy063rUBgt3R+A6ByFEByHoFQh6AiG9YhA+A8GRQTj0O+i13yGZQviomXArBDIIWtGDHK2UhxBqT2lq5HvKIwiZVm6JTwRKGwgFIQQtNKbulFASoDTYxmjlEQQFjQkCVCAEx4NCTV8VHnh3BMrpui5Jy7JMEyjFUGiwAJ8lfHRIiRMpACVpsGKVknZQoE466c3vpA0WKroFroopnY/PSe6OwIGB8Eoeev5RYIDpR4lcGL1YfpQMB7iRHwWHXlEb+AnaEAfY4wFGihfS0EObXH4Umn+ZDH0KbfXox/fujsCBV0IzBCjQ/IO3BGdZhO8RvZ7whiEEXKPoxQ3gJaSZWUNFQRCg4EdM0aG8hG0+eD2jDF5CWqPwrR8tA97dEYwHwWEImiEo/h1gjRIImtcoeJCaQNC83iAEGu3YVSoTCLwSZUIBCPI7yIo3HoS7IHAKuOIwDEss1GFY+/DZQEWdFEWSQiGGiqSCigYKPlRUHVTYNl0plKZmSoFtUmjcQUXoCwV7o+fE2G0AhU56C++PgAYi8TyvoB8FrpRWYM+TtdmjlzAynqctJQuEQmtzBgVaZ7VQsDef1mahxMrzaP4V0oaeQ+s5Fv43EOC8cC9gVRZ26VBetVVWRa3yCfdDMGeWdGpfQmJVtIWgBIK3Z1VW+DV8CS0E3qVdC0Gdwix9OgIehE5r6s5RWvPO42lNEDpP82RstXYthRZdHyg0GQtojJQSGhOrgm0aaSOTUWtDX1VzG8eFQkhfFQp3R6Bxd1BxFEU1DkkOBZhlbgGfeYYblFCKECpgZrodVhRwawmFCtfmGgq0QeVM0ViB86+FNlGC8w8+A6RgReri0AsFe3P0vRFEi1vkfpemDUrPN6jpLo3bkOzSzKpA//td2jmdT7gLgsVBUCMI9cIufQ4EzRD2u/QJg/C5CBxjDHQXQXfGVREUGtfA7wClDEgpFEJt3Jb5NaaEhWsMtqngVoAAkxEKuBIhBWSZyIkzoORQsBSY2kZVUJFCW5yMTsLPgdfh3gjgZrga3/cbLMCnn2Khk4pGCqkvt6RYkU4oXSoFpkBFI912sW2ccvedfQ636eQW2xs+2LeUT0GAFJoNCSyRLMjClQ7XZl/WZhBkteINSltBltfZ0K7A/doMvbEsY+zaDEsxCbK4Nosgqz2cqrVbFPwGZEVLFFNkBttEqjDEPaWmcIlSKC3M0q0QMLOEu4O8HDdiVQLnRFbFeNvt1sM/Ww0F/MS/VODqra2mmqQDDg97B8HxNgjmShW3V2nITBBWxbesSiayjGVV4HfoWRWWUEuQWFphVfh3yPo1SlmVBrMqID0XLz/ev51xfYfrx5fnHaCD3m6BQAaBlCooQDRJkvgkscBFEgt8ovRRW0rVDSmVUJohJRVK6COlFkplKSjLdEKB56QvT5vLrsdt6jf19QiYgt8ngWXAE5WGZkkC2a2C3kqQWGQZ8Ixl0WiDyjytbZueRWOVhseMWKpF/rGvJ8g/2sNbU+gVn7O7dBA2m6cHz82uRwDSFH+fJaWKWmVVbqnSuGIQNpuff3Zed71SxbV8wlC9JqyKYlbFVb1yy7IqrI4KWqvS6JVbUBAIqn8JRaWhLKsyVm5dNQibzfufV+dKBLB+WvValmUmzvO8MlAIoNBATRfleVBkWZsKpaihojFMqROgYJsYbk2AkvvQtgmYYrAibblN1EGFD5SwGFDaKL92EDabH8+JE12BII8S+aa5EwRB3rVt1uVQyNq2TaGmNm2b1FBoMqbUxYQSIsWHiioBSgmFuJA2HVCakNsYrEihUEBFniAFeguh6cUL4/768tpcjgAo1Aa/st0i1fIWOZDmp1vkXppXarpBTaV5u0GJNA/PSW4wCJu/b9HlCI5aoOre/jNQabgXqDSW7T8gPd9kEDabr8HFCIaDgPJDRxwjy9UuSyy4tAKJBHiHhfEsRimHRHsnYn4NmpBoj3JJaZhCXFkDFBLgUZZBfi3Lo0j4NejWvdUgbH6nlyLAgYM2CgehgYskCSzEUvBtRTotzCpYYpHG6ay3GaXxqSK4emGU64uuL0Owp8SO0v0WqXv7DzNLIjORWdAa/8T+IzowED6W7T8pNB7bf4yliEbtVoOw+SIs3tkInEKr/8/M0uh67K5nlvSCJZCZJRA/R5ZAayMczIRVS6Brfwc9sAQGzKrcdiZs/j6XFyEYzASySldVFScgXMBnjfZdv4YSEDqklFDRlVBI0fILlBgtv6lUdDEUyCaMtyKFbiXLr/Q2poAok9RVdLtB2Gx2+QUIqhrN1PRNeYuEt4TtP6JUCVBmGilVjO5VGt5EpeGtqjRElkGFt8LeCmkDzylutDvwtXXPR3CyUuUij6GTVBq32iL5+tXFZyNY8FSZcozKcoxqyjHC3sEcoxJmae8nYvk1ZVkV1RuIWbkF3fcc4/cbDsLmzTkbgRooVUh2QNsuyg5oF05RVGiLIglRdhAKmXSRUiKFZAc06QZCifMgJ9NxLb0R5w6UFivSgnvL8Vbk3AP4f/v2cN71/Offz9VBeE+ccxEUbQUVMXyfgk3zQUjfDmSMkL83fNY0IlCoht8bKVVi25DJPBDzdxgwBSqClPGEgZjZLR6mFNDEqeMyJqN4Wpapw4UYJ5uTA6WmnzaOS0upnXy7e/61NgqP9RqCbg0BUXy00S/rE9hZRo2dZUb6BLtFWtOHEhcJvZfmaZeuC2VdJCbSfLHorsPmxwECXqKEXWu2b+/Lg/C0LVYQJHoNwV6fcI4ZTq3af1ZZlf+2qXdDM1xWuF9XpkKqDzBLhxGMZ0IkM6EYzoRwOhPCwUzQxVCvg6tkvxLhGvV7877t/IjV1cyqqOnv4J2FQDlvi4Pw67WdI8jtWngYAVug0JeN7D/oEEdWHqlAClt5hpT0NEraPOJEfUWuBA1B5DPXTJ/TlWciyHeLr8RDdBjbAQS8RYrM1DNLNPQTV0rmlGeulGj/0RNWhV0pHfdRfqNECasydaUse2fOcxB0i9vr17SeIghMPy30AQTKkZdj3QKlLmWWqkc7U3edusZdZ4rAJA8Lc+HpNbyOWdr/Dup2M+Gxx/fj1T99JhxHoM3i6vgynwnWf3PPNi/PBHRrJat0VZYVGW/JBRbNuULxgUKGa/K9xQpLIT/aIaUBSsU2blgTh79ShJRObi1tJ2RQrs5HUG0XmO4/XTNEIJ30z/FXEfjkrlOK3kyhro2cZRzrLCMUcnxp6A0g7wCXPArYWcYRZxm4A98N9g4YjcFm821bklkQvQNwgyLvAJznUPAuQFA/zgfhl+cMEeAWGViNGjr/wPu0jOCj3HUmYwB87at/U3cds8BCb51L3XVw0xQI6xzjBMLAAjXlGBlCMP+hnnbJCr+GDz4bQfXffBBex4Og1tx15hwj8M9ZDBJFmRVtizJG0xZtgvYJNFiwvaUQewtQWJpqUXYgaaoF2SEIfCiwxNIWWRXFf+YINz92JJKl0LbNyeLDveXmEgT+6/wJDz0CscQUJE1lRdYETGFLzBRBgKZ5kiQ6FCmszERSJJqyG5ExWIoUOQvlEpKZ/HAgTcUiTQVNsvDC4jv7igJXE7A7c1tiG+gtyy9AUEX1/AF/LIJFmSmx33SGoOAt8rg+IVvVJ8ziTqoV7n7z66VdkOa9CxHMGab/PFdfpk+QFeKGzNJ0TdxfL+1NmCV+zpdZ9/88cxWzpMXHXLOP+YKO0fMsqzLWMQZWx1hpTT7ma/Ngs3lLljR83oUInmf9/wAeKRvqGPNexwi9HtIxkmhR1zVJEvBZkfSBBZIxoIDChl/JLY29JZUKv4SCbVM2wfo8eEhL+5xhm/oyBPHD7AFPTViTiGSfQ21mvc0RoNeeddexFig9tjugz5zYHfTE7uD1FihxielW58Hf50az1l/Uu4UWZxnvEgRetzATGvb2ntodtLU7iLvODMFtLVDl8r6A13OTrdh/5jFQpyDw54/6l97AXUdPY9H2tkhrgVqIRWO3KZJLgiX+QN4F390rt6z9Z6ZUOQNBOl8Yf5cnR8ONETjk34pX53c+fKC3bNfEUCA/WqwhqQM+U6Gwkyy34QK1KaP1efAQ4S3YlmSmEp9DchZ3fz6CLprzzY9IIk/elD79fW/2wYsIUpIfkpF/AgpC1j/Bt/4JLfonDEIPrH8Chx5UUIijA2tiUcy9A+ATvQM85xIETjl/yp/WEDbrnxCF7SD4YcE/QRCse6occdeZe6oc4A8e4HUcO8scjZU+imA3f8ybWQ3/AYpZRTAZBH0AwjF3nQPvQuFOPYZWB+FkBD/mz9m1B9x1DiBwnRy93EzmJujUZjJj0iiPQjczMLHyvIFCghWFyTKk1AoqaqD4QPGhSZ1Ao2pJbpTr70NeGAOifR5BJ8ZHnzkDD6ygIoZeVXQBgmj7d/ag920CbQAb9dYgNmijsCLNDiHInLZtsyoP8tJAIQLZys/a1o/QUgViWBwFUYVeeyHcQl57UZCHScaUGCqSOg+i1F0fg+cGBcEcvenI7gXdZyC6Rehn18FzHPcCBEuS9D/lMDZTI7aizWAU+TnNQQTBQJ+w5NHayzJjC5Tee7QSn7CwadvruTtm//HOR+C8LGha/0ho3IJH61kWqEuZpUNjcJRVuYBZUv8WHvVWXeyug2GyDMGzXu5e7+UuwS6e9XL3rJe7p20bZJbWx+CtkYhdjPK1Puae+Jh7wjafjSBdVtrEgm3v5c7M0lEETi2ShG9lmaGM0csy8UiWQQrJMiCgxP4BHum5s2IPFXxpU01lpnMQpH48FxvwbajLkTwHzymtqHQEgd0iJfLFPT3yxcb3l+uy83PSv55mFHcydKr1zkSQd4vM+c830mj0br2+5ROOI+j5hIvddaoD+4J/TmKZUxGky4P+Jbk2sYy3T+tilVtz+0+v3BpaoKpVmQll570lUGLRDlmgJvF4SwgqJ31d4JLwaQ8LiWX2Fqg5gpF6rUIPPHqZyGsPXpkS3d3QvgufbN+tqtgXCr6aTVoKpV7UK8u7kKMsYw1caO4hUampyorDISuxQEGh4hhHNhHBc6B/in6kBDFEgQfCv2a3Nu9+FDUZoQlsI2DJKl3K18AvSF8jtQ5+cCtnmaEI2ZqsPBI32imJG3WBhD7dlWcMxprCG8DxqSDLmIwsUN2BfSEi98Aa5Dlcox0U7JxhASgpyRwo6xGlkULYCAVFvkgofpDtnn+v+KnAkKcGJSMHuNPMkwhZIzKTIQsUxtsyBb4YWaA6YyNklxLL9JHK7jity9QCdUCf+PPx69dHuL5+5c954euwcJTy+7/fXw44/f1I3ZNipc8IGD/VXWd9HmzmrP2HXlsEebm7zlDHqEW9y17u7j4ymJS4UR8S2HJI4IEx+OTrD2s5I3GwFS93TzRLVsfoTXSMSR8SiFdn3XrRjF/JiPCWMs1jUdk8Fo353xmDXxljU4ItOZ5Jw4wyaYzmxXpGk0xN+IT47ZNn/Pr1/bW4QU6VMwLGbbi24y3JMHe5vr215hYB4/MsR3qe5UhZCil+F9Rb97l+PrRKcibt8ywNLFB9niW2QHnCLFnffJKmKEac4h0SG++QUHwARlszY4HR1hzVwBSKd1jnkj75eu7qQcRF3Mn3SRF+OUBd9hT8ptjGx8gO/KZHlCqc+YxVGs7Ardf1Vr2MP/l67pKJm8jeEH2FUuUQn2CVKsa7ZbjCFddzfVIU1hE+4XQH78FM0K63LMd88vX+kupBwLgzioEaOHgfCxgn1xBUWpCbB2ok0GkE9RuUAw9NzUgphUK256RIinWO+dOuv1+2EWXhG2MrCltBqH1L6YSC+fkKUuDYb+pY1sk61U53B213Bz32T3i59xBs3v9si5GHRKkFm2WW9ruDHsRArSeWOTdXrnP3ReH3ziRr0doX5m1e0+votUFIFxV9n3b92CX1airCefJq9wJmKR+mhCyEWdL8Ongeyw7euu3xE4agY6X0PCnlUMFMSSl7dx38gu00KWVFzBJKkbwHyGszlCJHfiLRMLsTLBDF3EPgc66vHvyiahqtbaVIedkpVpoFCabkp3qqOMf4hJE+ofnsUfj57enH44uzZP4ZOhZbPuHCLHwzZmmaMHisVPHXhai///37ctvr9++vb7ttGqfLg7DALKmTUxYjs8QqBBswPmCblbDN7Pgys0VG29VR+Pnie5ieQOEaghkZ8N3roIAiTE9RmNIAKwooJJZihNJYijVJwXfW3gjB1GGIbZHCNk8Cxo2eMku9u04qri3Wo4U+S1sYUrjQySfdW3sL1mG+3ncRpm2obF6K0mahKCcVfeYKDEmqmkEBCaWlxM0SgtSCTIfwm2FhdIs/pTSjLHw00gta/1kWvrHdYX0UnnYwhY7nwLN2hwUE5iQE5FE4DVmXabFgd/iQLHze6ur49BKrqy1Qt8kDeNrRBr2zzNm2SGddqP720kwS/OhVd50rECxn1+ltkccRsLuO37Ytpp6iAIMSasoMkzPleWApdYJOI5RkCxM6YfotdCfBfFypXl8ddx32RqmeAnkOJr8KEnJO4d6y6EoESKHUYJxsCp1/WnROYUp2HEG77h3g7LPwLfgnyI5C+qz1nfLba3qFf8LpCLiNbymTLHzH/RNu4anSrq4L33ap+gBPlRsdbeAuMEtqYoYTn7n5wQLtFML66vi+S73+YAGCoA8Egl2O4MSUxcsIKAsfRvVVGgponezcLEMzZQ6fmGQrqr0so4TancoMUsLWZC0aZEtokwQYZbdd3ylfSnQujdosQ+dSp0SvPTKHZtyb490CQWcyclXNkyzz8Dlxm4lB1mSU9XsdQWT9GLMEC3BfhktMPcg+aDqsKOCpDVNMYik+LT5wb3Vop9zlmBUQFjkEaLCTEEeeliXMf3gTBCUtjEzJoTfOSzjMPriOIJtskepUt97ZBmVWd8qnXTPLgbe+RV6OgLLwrVmgDiE4eg7U6W693YGdMjnnaIOLEZyShe/A0QauYQiuEQjauCh9YN5wXo73ZjjKG478mhF+DRpVhHJ1LgC/wMcUoL8EQlCUaxwZXdd4N0NQGqagnwlzjC08x24V6wgMZ+EjUWJSaFYpyxVNbVbXhZ+7YHTr4d4uRTCHZGvWKVRYjoGaxJ1MUxa3Xh8DNUoYrFb3iO+72PoN7HPgHYqBuhDBIGXxPgufTVms1xAcYZbOPIXpgEz5kqqLmKWPPAfqQMriaRa+fVoXb8HB29p/eLTXtSwwCiecCHY1goGD91IWvhWlClqgypAtUEVe1xSc3GABLVBxABQKW67rQCh8PhNQKJFVB//nvqWk7rpMuUsr6JWeA8/LOdVTXUftTRF0GASd1wGd9lQH/By0QAUYOL2IYGaBWolPjdz+FKbBSygK7739B36ueH2PeG36+FTv7AjZ0xGsRchi9+0Sgg842uDQKFwWK339yaG3z8JnWRXV523Wo6zJq/qF72/FFVHzZyBYjJoXZmkxat5y7qi4iLJM4oxc4bV95NxJ2QGce8wU5tyR4kuckSkxmqhlSrQmTX1/SZFzxwgkeMwsBuqGCIayg0sxUJi5PJSc5jMEmTXNh5SFr5ZlqYN1g7PwQYGy8FmjvY8VydCcPzR/4/F0bRUt7pTf3nBtCzkHHhQ6eU7Y3h6BPAfbhHZh5IwSSwjqj8nCl815x/eHRK/GQH1QHsCTs/rfJgvf1AjmT1fHvw+puUF2ndMRXGCGi0h25SxHmnMZ4ZGV5OWOYlsreh3Js0TZdSTPEuUNFwghH1kJvU1G4e9Lrl2P9C/QBiBEEuzCeZY+AEFsaJWMWHCMWAxdRhA5YqBJxahjhQzfyhiWIv/jLWk6vYU++luAklbh0Knp5xv58Te2cdMMevkgBLYQDxsvI+AtcikH3vhAY5A+lKWcZv9J9uvCt4dUnGWUTeahphaoD0AwyMK3T1k8R/Ch50BpOwrf37rPOzTzBln41DwHnth/tFqMgVpIMWQjkKItj8LTW+GyJbBYikDyPg7BwBapDiBQFBeJ5yZRVCL5+JIjHJ6ohBsznZuE2y/6+JL/G3rLDijsLWspsfSGFVVKTuDvb1jT2ec09jmxtEk+DgFROC7yIIKR3YHO6MO1eZIhdb8266W12VlYm3mX7mB1fGj4jL792gwbYWRDIaOx3eHGCPCB1jC5juC8LHzn79LB01uob5it94P4hEUH7ym/tn4OlBpl6x2dwkQQOl8f49cWo+Zvh+AUjhHzJ9A5UGieRcMtGnsTayBOhWLNwNnIQFy2TMGMB3szcDUyEEPjJuDexA4CV8SmYzI3R+aDEbTHEOS4MNKBciiXhHxAXh1WBS5YIUossKJgRSeUsqBD6HhZ8lHsQUoMFDmerpZD6KANfBaVUEh4SuhIO16WUJkUxtAbKnnui4BnQ69sm0nzvrZBuqdn4dtL83qeA89b1SfcD8EJWfiWY6AudZa5nlm6PYI+C58eebkHNiRw5DZ1OAvfyMd8rOGzTGurD2Thux8C7fgD/7feqW3stTejHPeZaxZ9AG3F/Dn3RbBsgbLnQFnfZo8PFujtP8MsfIv2n1IdyoF3ggXqUxHc7Ryo/yl3naF6bXwi2CwHXrOYhe/IOVDDHHjsULXPgefN1Gv3QeBwvhbODsHnJlGOF04ksaeUNtdEbVMx1BVnv4yFQlGJPudmkJyd0htFWUo+B8klYylYuDuCCrVLeEa5SSiZAp5rjunrlDFFgHnDoaaj/OTGcA48pGD6Oh/PKKcsfNAGs/CVRih0rnnObSjTHSX9QvchqHApn4MRSgnda+feCCiU/DYJ6A76iRzIgXdhArobIpi59V6eivBQzPoZPkt3QODuvdc4B574jlEOPDxVt7f/7CnZ3ncs55Nr2XcssyfXjuw/9uRalIwSyYEXkP1HfMd6C9TdEIgFKgzF/hP29h82f5MsQ/YfPNKb7T8h239CNnLTOd2U0xyP9CbzN0kslIW85hOias5CzhQxjPf2n6C9N4IVC9T0XOmp/Wd1gzps/7Eb1DEnjc9GcAmzFN6GVVnULN0FwZxt3p81P0gsM3Ob0pJ6ZfWkd21z4M1OeteTk95nbPOnI+CMW9O8EXHCGRjKYQaGnoLcSenvM0rsszb4fdaGcprPIZ48Z5/P4f4I/g/Q3ChHCCjo0wAAAABJRU5ErkJggg==" alt="Return Policy" />
                    <h3>RETURN POLICY</h3>
                    <p>Returns within 7 days.</p>
                </div>
                <div className="footer-item">
                    <img src="data:image/png;base64,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" alt="Contact" />
                    <h3>CONTACT US</h3>
                    <p>Write us at driftz@gmail.com</p>
                </div>
            </footer>
        </div>
        <Footer/>
        </>
    );
};

export default ReturnRequest;
