<script lang="ts">
    import Column from 'src/components/Column/Column.svelte';
    import Title from 'src/components/Title/Title.svelte';
    import Label from 'src/components/Label/Label.svelte';
    import Email from 'src/components/Icon/Email.svelte';
    import Registration from 'src/components/Icon/Registration.svelte';
    import Password from 'src/components/Icon/Password.svelte';
    import VSpace from 'src/components/VSpace/VSpace.svelte';
    import Input from 'src/components/Input/Input.svelte';
    import Button from 'src/components/Button/Button.svelte';

    import Logo from 'src/pages/components/Logo/Logo.svelte';

    let email = $state('');
    let password = $state('');
    let repeatPassword = $state('');

    function sendRequest() {
		console.log('sendRequest');
	}
</script>

<style lang="less">
    @import "src/pages/components/RegistrationFrom/registration-form.less";
</style>

<Column xs="10" s="10" m="5" l="4" layout="center">
    <div class="registration-form">
        <Logo />
        <Title typography="semibold" size="large">Photo Points</Title>
        <VSpace height="25" />
        <div class="registration-form-body">
            <Label title="Адрес электронной почты" icon={Email} />
            <VSpace height="20" />
            <Input type="text" bind:value={email} placeholder="Введите адрес электронной почты" />
            <VSpace height="30" />
            <Label title="Пароль" icon={Password} />
            <VSpace height="20" />
            <Input type="password" bind:value={password} placeholder="Введите пароль учетной записи" />
            <VSpace height="30" />
            <Label title="Повторите пароль" icon={Password} />
            <VSpace height="20" />
            <Input type="password" bind:value={repeatPassword} placeholder="Повторите пароль учетной записи" />
            <VSpace height="30" />
            <div class="registration-form-action">
                <Button onclick={sendRequest} icon={Registration}>Регистрация</Button>
            </div>
            <VSpace height="30" />
        </div>
    </div>
</Column>