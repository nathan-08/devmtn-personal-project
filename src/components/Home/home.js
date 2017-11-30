import React, { Component } from 'react'
import './home.css'
import '../../css/hover.css'
import '../../css/reset.css'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
    render() {
        return (
            <div className='Home'>
                <nav className='navbar'>
                    <div className='title'>
                        Welcome to the Internet.
                    </div>
                    <div className='heading'> <button className='hvr-grow btn'> Home </button> <button className='hvr-grow btn'> Home1 </button> <button className='hvr-grow btn'> Home2 </button>
                        <button className='hvr-grow btn'> Home3 </button>
                        <button className='hvr-grow btn'> Home4 </button>
                        <button className='hvr-grow btn'> Home5 </button>
                    </div>
                </nav>
                <div className='content'>
                    <div className='content-left'>
                    Tandem aliquando, Quirites, L. Catilinam furentem audacia, scelus anhelantem, pestem patriae nefarie molientem, vobis atque huic urbi ferro flammaque minitantem ex urbe vel eiecimus vel emisimus vel ipsum egredientem verbis prosecuti sumus. Abiit, excessit, evasit, erupit. Nulla iam pernicies a monstro illo atque prodigio moenibus ipsis intra moenia comparabitur. Atque hunc quidem unum huius belli domestici ducem sine controversia vicimus. Non enim iam inter latera nostra sica illa versabitur, non in campo, non in foro, non in curia, non denique intra domesticos parietes pertimescemus. Loco ille motus est, cum est ex urbe depulsus. Palam iam cum hoste nullo inpediente bellum iustum geremus. Sine dubio perdidimus hominem magnificeque vicimus, cum illum ex occultis insidiis in apertum latrocinium coniecimus.

[2] Quod vero non cruentum mucronem, ut voluit, extulit, quod vivis nobis egressus est, quod ei ferrum e manibus extorsimus, quod incolumes cives, quod stantem urbem reliquit, quanto tandem illum maerore esse adflictum et profligatum putatis? Iacet ille nunc prostratus, Quirites, et se perculsum atque abiectum esse sentit et retorquet oculos profecto saepe ad hanc urbem, quam e suis faucibus ereptam esse luget; quae quidem mihi laetari videtur, quod tantam pestem evomuerit forasque proiecerit.

[3] Ac si quis est talis, quales esse omnes oportebat, qui in hoc ipso, in quo exultat et triumphat oratio mea, me vehementer accuset, quod tam capitalem hostem non comprehenderim potius quam emiserim, non est ista mea culpa, Quirites, sed temporum. Interfectum esse L. Catilinam et gravissimo supplicio adfectum iam pridem oportebat, idque a me et mos maiorum et huius imperii severitas et res publica postulabat. Sed quam multos fuisse putatis, qui, quae ego deferrem, non crederent, [quam multos, qui propter stultitiam non putarent,] quam multos, qui etiam defenderent [,quam multos, qui propter improbitatem faverent]! Ac, si illo sublato depelli a vobis omne periculum iudicarem, iam pridem ego L. Catilinam non modo invidiae meae, verum etiam vitae periculo sustulissem.

                    </div>
                    <div className='text-box'>
[4] Sed cum viderem, ne vobis quidem omnibus re etiam tum probata si illum, ut erat meritus, morte multassem, fore ut eius socios invidia oppressus persequi non possem, rem huc deduxi, ut tum palam pugnare possetis, cum hostem aperte videretis. Quem quidem ego hostem, Quirites, quam vehementer foris esse timendum putem, licet hinc intellegatis, quod etiam illud moleste fero, quod ex urbe parum comitatus exierit. Utinam ille omnis secum suas copias eduxisset! Tongilium mihi eduxit, quem amare in praetexta coeperat, Publicium et Minucium, quorum aes alienum contractum in popina nullum rei publicae motum adferre poterat; reliquit quos viros, quanto aere alieno, quam valentis, quam nobilis!

[5] Itaque ego illum exercitum prae Gallicanis legionibus et hoc dilectu, quem in agro Piceno et Gallico Q. Metellus habuit, et his copiis, quae a nobis cotidie comparantur, magno opere contemno collectum ex senibus desperatis, ex agresti luxuria, ex rusticis decoctoribus, ex iis, qui vadimonia deserere quam illum exercitum maluerunt; quibus ego non modo si aciem exercitus nostri, verum etiam si edictum praetoris ostendero, concident. Hos, quos video volitare in foro, quos stare ad curiam, quos etiam in senatum venire, qui nitent unguentis, qui fulgent purpura, mallem secum suos milites eduxisset; qui si hic permanent, mementote non tam exercitum illum esse nobis quam hos, qui exercitum deseruerunt, pertimescendos. Atque hoc etiam sunt timendi magis, quod, quid cogitent, me scire sentiunt neque tamen permoventur.

                    </div>
                    <div className='content-right'>
                        [6] Video, cui sit Apulia adtributa, quis habeat Etruriam, quis agrum Picenum, quis Gallicum, quis sibi has urbanas insidias caedis atque incendiorum depoposcerit. Omnia superioris noctis consilia ad me perlata esse sentiunt; patefeci in senatu hesterno die; Catilina ipse pertimuit, profugit; hi quid expectant? Ne illi vehementer errant, si illam meam pristinam lenitatem perpetuam sperant futuram. Quod expectavi, iam sum adsecutus, ut vos omnes factam esse aperte coniurationem contra rem publicam videretis; nisi vero si quis est, qui Catilinae similis cum Catilina sentire non putet. Non est iam lenitati locus; severitatem res ipsa flagitat. Unum etiam nunc concedam: exeant, proficiscantur, ne patiantur desiderio sui Catilinam miserum tabescere. Demonstrabo iter: Aurelia via profectus est; si accelerare volent, ad vesperam consequentur.

[7] O fortunatam rem publicam, si quidem hanc sentinam urbis eiecerit! Uno mehercule Catilina exhausto levata mihi et recreata res publica videtur. Quid enim mali aut sceleris fingi aut cogitari potest, quod non ille conceperit? quis tota Italia veneficus, quis gladiator, quis latro, quis sicarius, quis parricida, quis testamentorum subiector, quis circumscriptor, quis ganeo, quis nepos, quis adulter, quae mulier infamis, quis corruptor iuventutis, quis corruptus, quis perditus inveniri potest, qui se cum Catilina non familiarissime vixisse fateatur? quae caedes per hosce annos sine illo facta est, quod nefarium stuprum non per illum?

[8] Iam vero quae tanta umquam in ullo [homine] iuventutis inlecebra fuit, quanta in illo? qui alios ipse amabat turpissime, aliorum amori flagitiosissime serviebat, aliis fructum lubidinum, aliis mortem parentum non modo inpellendo, verum etiam adiuvando pollicebatur. Nunc vero quam subito non solum ex urbe, verum etiam ex agris ingentem numerum perditorum hominum collegerat! Nemo non modo Romae, sed ne ullo in angulo totius Italiae oppressus aere alieno fuit, quem non ad hoc incredibile sceleris foedus asciverit.

[9] Atque ut eius diversa studia in dissimili ra
                    </div>
                </div>
                <div className='footer'>
                    <div>Footer</div>
                </div>
            </div>
        )
    }
}