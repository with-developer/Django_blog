from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from . import forms
from django.http import HttpResponse
from . import models
from users.models import Profile
from users import models as users_models
from django.db.models import Q


# Create your views here.




class PassInsideView() :
    name = ''
    challenge_id = ''
    category = ''
    description = ''
    points = ''
    file = ''
    flag = ''
    author = ''

    def __init__(self, name, challenge_id, category, description, points, file, flag, author) :
        self.name = name
        self.challenge_id = challenge_id
        self.category = category
        self.description = description
        self.points = points
        self.file = file
        self.flag = flag
        self.author = author

def assignID(a) :
	return a.lower().replace(' ','_')



@login_required(login_url="/login/")
def index(request) :
    current_user = request.user
    my_rank = Profile.objects.filter(user=current_user)
    challenge = models.Challenges.objects.order_by("points")
    challenge_info_stego_object = []
    challenge_info_for_object = []
    challenge_info_re_object = []
    challenge_info_pwn_object = []
    challenge_info_web_object = []
    challenge_info_crypto_object = []
    for c in challenge :
        if c.category == 'Stegnography' :
            s = PassInsideView(c.name, assignID(c.name), c.category, c.description, c.points, c.file, c.flag, c.author)
            challenge_info_stego_object.append(s)
        elif c.category == 'Reverse Engineering' :
            re = PassInsideView(c.name, assignID(c.name), c.category, c.description, c.points, c.file, c.flag, c.author)
            challenge_info_re_object.append(re)
        elif c.category == 'Forensics' :
            f = PassInsideView(c.name, assignID(c.name), c.category, c.description, c.points, c.file, c.flag, c.author)
            challenge_info_for_object.append(f)
        elif c.category == 'Pwning' :
            p = PassInsideView(c.name, assignID(c.name), c.category, c.description, c.points, c.file, c.flag, c.author)
            challenge_info_pwn_object.append(p)
        elif c.category == 'Web' :
            w = PassInsideView(c.name, assignID(c.name), c.category, c.description, c.points, c.file, c.flag, c.author)
            challenge_info_web_object.append(w)
        elif c.category == 'Cryptography' :
            cy = PassInsideView(c.name, assignID(c.name), c.category, c.description, c.points, c.file, c.flag, c.author)
            challenge_info_crypto_object.append(cy)

    solved_challenges_by_user = []
    try :
        fc = models.ChallengesSolvedBy.objects.filter(user_name=request.user)
        for f in fc :
            solved_challenges_by_user.append(f.challenge_id)
    except :
        pass

    return render(request, 'wargame.html',{'data_stego':challenge_info_stego_object,
                                              'data_for':challenge_info_for_object,
                                              'data_re':challenge_info_re_object,
                                              'data_pwn':challenge_info_pwn_object,
                                              'data_web':challenge_info_web_object,
                                              'data_crypto':challenge_info_crypto_object,
                                              'user_solved':solved_challenges_by_user,
                                              'my_rank':my_rank})



@login_required(login_url="/login/")
def flagsubmit(request) :
	if request.method == 'POST' :
		flag_submit = ''
		flag_submit_id = ''
		x = ''
		for k in request.POST :
			if k == 'submit' :
				continue
			if k == 'csrfmiddlewaretoken' :
				continue
			else :
				x = k
		flag_submit = request.POST[x]
		flag_submit_id = x[:-5]
	flag = models.Challenges.objects.get(challenge_id=flag_submit_id).flag
	points = models.Challenges.objects.get(challenge_id=flag_submit_id).points
	if flag == flag_submit and not request.user.is_superuser :
		fr = models.ChallengesSolvedBy(challenge_id=flag_submit_id, user_name=request.user, points=points)
		try :
			fc = models.ChallengesSolvedBy.objects.filter(user_name=request.user)
			obs = []
			for k in fc :
				obs.append(k.challenge_id)
			if flag_submit_id in obs :
				response = '<div id="flag_already"><p>ALREADY SUBMITTED</p></div>'
			else :
				fr.save()
				initial_points = users_models.Profile.objects.get(user=request.user).points
				updated_points = initial_points + points
				users_models.Profile.objects.filter(user=request.user).update(points=updated_points)
				response = '<div id="flag_correct"><p>CORRECT</p></div>'
		except :
			fr.save()
			initial_points = users_models.Profile.objects.get(user=request.user).points
			updated_points = initial_points + points
			users_models.Profile.objects.filter(user=request.user).update(points=updated_points)
			response = '<div id="flag_correct"><p>CORRECT</p></div>'
	elif request.user.is_superuser :
		response = '<div id="flag_already"><p>Correct, But not added to scoreboard</p></div>'
	else :
		response = '<div id="flag_incorrect"><p>INCORRECT</p></div>'
	return HttpResponse(response)

@login_required(login_url="/login/")
def addchallenges(request) :
	
	if request.user.is_superuser :
		if request.method == 'POST' :
			success = 0
			form = forms.AddChallengeForm(request.POST, request.FILES)
			if form.is_valid() :
				success = 1
				print(request.FILES)
				if request.FILES :
					i = models.Challenges(file=request.FILES['file'], 
						name=request.POST['name'], 
						category=request.POST['category'], 
						description=request.POST['description'], 
						points=request.POST['points'],
						challenge_id=assignID(request.POST['name']),
						flag=request.POST['flag'], 
						author=request.POST['author'])
					i.save()
				else :
					i = models.Challenges( 
						name=request.POST['name'], 
						category=request.POST['category'], 
						description=request.POST['description'], 
						points=request.POST['points'],
						challenge_id=assignID(request.POST['name']),
						flag=request.POST['flag'], 
						author=request.POST['author'])
					i.save()
				return render(request, 'addchallenges.html', {'form':form,'success':success})
		else :
			form = forms.AddChallengeForm()

		return render(request, 'addchallenges.html', {'form':form})
	
	else :
		return redirect("/")
    
@login_required(login_url="/login/")
def rank(request) :
    current_user = request.user
    profile_list = Profile.objects.order_by("-points") & Profile.objects.filter(~Q(user=1)) & Profile.objects.filter(~Q(user=3))
    my_rank = Profile.objects.filter(user=current_user)
    return render(request, 'rank.html', {'profile_list':profile_list, 'my_rank':my_rank})

